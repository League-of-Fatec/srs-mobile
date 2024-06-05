import React, { useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from '../styles';
import { useAnimatedRef } from 'react-native-reanimated';
import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { StudentState } from '@/redux/UserSlice';
import { ResponseTypeClassesByTeacherIdByWeekDay } from '@/modules/professor/screens/Home/utils/ResponseTypeClassesByTeacherIdByWeekDay';
import { api_url_local } from '@/utils/API_URLS';
import { formatTime } from '@/utils/formatTime';
import LoadingSalasFavoritas from '@/components/shared/LoadingSalasFavoritas';
import { ResponseTypeReservationsByCourseIdByDate } from '../types/ResponseTypeReservationsByCourseIdByDate';
import { currentDate } from '@/utils/currentDate';

export type ClassCard =
    {
        id: number,
        name: string,
        time: string,
        classroom: string,
        floor: string,
        teacherFirstName: string,
        teacherLastName: string

    }

const ProximasAulas = ({ navigation }: { navigation: NavigationProp<any> }) => {

    const { student, token } = useSelector((state: { student: StudentState }) => state.student);
    const animatedRef = useAnimatedRef<ScrollView>();
    const [combinedArray, setCombinedArray] = useState<ClassCard[]>([]);

    const [isLoading, setLoading] = useState(false);


    const normalizeClasses = (classes: ResponseTypeClassesByTeacherIdByWeekDay) => classes.map(({ id, name, time, classroom, userTeacher }) => ({
        id,
        name,
        time,
        classroom: classroom.name,
        floor: classroom.floor,
        teacherFirstName: userTeacher.user.firstName,
        teacherLastName: userTeacher.user.lastName
    }));

    const normalizeReservas = (reservas: ResponseTypeReservationsByCourseIdByDate[]) => reservas.map(({ id, start_time, classroom, class: className, userTeacher }) => ({
        id,
        name: className.name,
        time: start_time,
        classroom: classroom.name,
        floor: classroom.floor,
        teacherFirstName: userTeacher.user.firstName,
        teacherLastName: userTeacher.user.lastName
    }));

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () => {
                setLoading(true);

                try {
                    const dataAtual = new Date();
                    const weekDay = dataAtual.getDay();

                    const date = currentDate();
                    const fetchClasses = fetch(`${api_url_local}/classes/course/${student?.course.id}/${weekDay}`)
                    const fetchReservations = fetch(`${api_url_local}/reservations/course/${student?.course.id}/${date}`)

                    const [responseClasses, responseReservations] = await Promise.all([fetchClasses, fetchReservations])

                    const responseClassesJson: ResponseTypeClassesByTeacherIdByWeekDay = await responseClasses.json();
                    let responseReservationsJson: ResponseTypeReservationsByCourseIdByDate[] = await responseReservations.json();
                    responseReservationsJson = responseReservationsJson.filter(reservation => reservation.class !== null);

                    const normalizedClasses = normalizeClasses(responseClassesJson);
                    const normalizedReservas = normalizeReservas(responseReservationsJson);

                    const combinedArray = [...normalizedClasses, ...normalizedReservas];

                    setCombinedArray(combinedArray);
                } catch (error) {
                    console.error(error);
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        }, [])
    );

    return (
        <View style={styles.containerProximasAulas}>
            <Text style={styles.titleProximasAulas}>Próximas Aulas</Text>
            {isLoading ? (
                <LoadingSalasFavoritas />
            ) : <>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    ref={animatedRef}
                    contentContainerStyle={{ paddingLeft: 10 }}
                >
                    {combinedArray.length === 0 ? (
                        <View style={styles.viewNoClasses}>
                            <Text style={styles.textNoClasses1}>Você não tem aulas disponíveis</Text>
                            <Text style={styles.textNoClasses1}>no dia de hoje</Text>
                            <Text style={styles.textNoClasses2}>Se quiser ver as aulas reservadas em qualquer dia no calendário</Text>
                            <Text style={styles.textNoClasses3}>Clique no botão Ver Mais</Text>
                        </View>
                    ) : (
                        combinedArray.sort((a, b) => {
                            const timeA = formatTime(a.time);
                            const timeB = formatTime(b.time);
                            if (timeA && timeB && timeA < timeB) return -1;
                            if (timeA && timeB && timeA > timeB) return 1;
                            return 0;
                        }).map((currentClass, index) => {
                            return (
                                <TouchableOpacity style={styles.itemAula} key={index}>
                                    <View style={styles.cardAula}>
                                        <Ionicons style={styles.iconAluno}
                                            name='book' />
                                        <View style={styles.cardDescAula}>
                                            <Text style={styles.nomeProfessor}>
                                                {currentClass.teacherFirstName} {currentClass.teacherLastName.split(" ").pop()}
                                            </Text>
                                            <Text style={styles.descAula}>{currentClass.name}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.cardDescSala}>
                                        <Text style={styles.titleAula}>{currentClass.classroom} - {currentClass.floor}° Andar</Text>
                                        <Text style={styles.descSala}>Começa às {formatTime(currentClass.time)} horas</Text>
                                    </View>


                                </TouchableOpacity>
                            )
                        })
                    )}

                </ScrollView>
                <View style={{ width: '100%' }}>
                    <TouchableOpacity style={[
                        combinedArray.length > 0 ? styles.botaoVerMais1 : styles.botaoVerMais2
                    ]}
                        onPress={() => navigation.navigate("Calendário")}>
                        <Text style={styles.textoBotaoVerMais}>Ver mais</Text>
                    </TouchableOpacity>
                </View>
            </>
            }

        </View>
    )
}

export default ProximasAulas;