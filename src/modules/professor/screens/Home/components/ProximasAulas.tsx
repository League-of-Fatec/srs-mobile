import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from '../styles';
import { useAnimatedRef } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import { api_url_local } from '@/utils/API_URLS';
import { ProfessorState } from '@/redux/UserSlice';
import { useSelector } from 'react-redux';
import { ClassesByTeacherIdByWeekDay, ResponseTypeClassesByTeacherIdByWeekDay } from '../utils/ResponseTypeClassesByTeacherIdByWeekDay';
import { formatTime } from '@/utils/formatTime';
import LoadingSalasFavoritas from '@/components/shared/LoadingSalasFavoritas';
import { ResponseReservation, ResponseReservationsJson } from '../../Calendario/utils/ResponseReservationsType';
import { currentDate } from '@/utils/currentDate';


export type ClassCard =
    {
        id: number,
        name: string,
        time: string,
        classroom: string,
        floor: string,
    }


const ProximasAulas = ({ navigation }: { navigation: NavigationProp<any> }) => {

    const professor = useSelector((state: { professor: ProfessorState }) => state.professor);
    const animatedRef = useAnimatedRef<ScrollView>();
    const [combinedArray, setCombinedArray] = useState<ClassCard[]>([]);

    const [isLoading, setLoading] = useState(false);


    const normalizeClasses = (classes: ResponseTypeClassesByTeacherIdByWeekDay) => classes.map(({ id, name, time, userTeacher, classroom }) => ({
        id,
        name,
        time,
        classroom: classroom.name,
        floor: classroom.floor
    }));

    const normalizeReservas = (reservas: ResponseReservationsJson) => reservas.map(({ id, start_time, classroom, class: className }) => ({
        id,
        name: className.name,
        time: start_time,
        classroom: classroom.name,
        floor: classroom.floor
    }));

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () => {
                setLoading(true);

                try {
                    const dataAtual = new Date();
                    const weekDay = dataAtual.getDay();
                    const date = currentDate();

                    const fetchClasses = fetch(`${api_url_local}/classes/${professor.professor?.id}/${weekDay}`)
                    const fetchReservations = fetch(`${api_url_local}/reservations/${professor.professor?.id}/${date}`)

                    const [responseClasses, responseReservations] = await Promise.all([fetchClasses, fetchReservations])

                    const responseClassesJson: ResponseTypeClassesByTeacherIdByWeekDay = await responseClasses.json();
                    const responseReservationsJson: ResponseReservationsJson = await responseReservations.json();

                    const normalizedClasses = normalizeClasses(responseClassesJson);
                    const normalizedReservas = normalizeReservas(responseReservationsJson);

                    const combinedArray = [...normalizedClasses, ...normalizedReservas]
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
                            <Text style={styles.textNoClasses1}>Você não tem aulas no dia de hoje</Text>
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
                                        <Ionicons style={styles.iconProf}
                                            name='book' />
                                        <View style={styles.cardDescAula}>
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