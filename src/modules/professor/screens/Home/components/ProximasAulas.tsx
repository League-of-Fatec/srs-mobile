import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from '../styles';
import { useAnimatedRef } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';
import { api_url_local } from '@/utils/API_URLS';
import { ProfessorState } from '@/redux/UserSlice';
import { useSelector } from 'react-redux';
import { ResponseTypeClassesByTeacherIdByWeekDay } from '../utils/ResponseTypeClassesByTeacherIdByWeekDay';
import { formatTime } from '@/utils/formatTime';

const ProximasAulas = ({ navigation }: { navigation: NavigationProp<any> }) => {

    const professor = useSelector((state: { professor: ProfessorState }) => state.professor);
    const animatedRef = useAnimatedRef<ScrollView>();
    const [classes, setClasses] = useState<ResponseTypeClassesByTeacherIdByWeekDay>([]);

    useEffect(() => {

        const date = new Date();
        const weekDay = date.getDay();

        (async () => {
            if (weekDay) {
                const response = await fetch(`${api_url_local}/classes/${professor.professor?.id}/${weekDay}`)
                const responseJson: ResponseTypeClassesByTeacherIdByWeekDay = await response.json();
                setClasses(responseJson);
            }
        })();

    }, []);

    return (
        <View style={styles.containerProximasAulas}>
            <Text style={styles.titleProximasAulas}>Próximas Aulas</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                ref={animatedRef}
                contentContainerStyle={{ paddingLeft: 10 }}
            >
                {classes.length === 0 ? (
                    <View style={styles.viewNoClasses}>
                        <Text style={styles.textNoClasses1}>Você não tem aulas no dia de hoje</Text>
                        <Text style={styles.textNoClasses2}>Se quiser ver as aulas reservadas em qualquer dia no calendário</Text>
                        <Text style={styles.textNoClasses3}>Clique no botão Ver Mais</Text>
                    </View>
                ) : (
                    classes.map((currentClass, index) => {
                        return (
                            <TouchableOpacity style={styles.itemAula} key={index}>
                                <View style={styles.cardAula}>
                                    <Ionicons style={styles.iconProf}
                                        name='person' />
                                    <View style={styles.cardDescAula}>
                                        {/* <Text style={styles.nomeProfessor}>
                                            {currentClass.userTeacher.user.firstName} {currentClass.userTeacher.user.lastName.split(" ")[currentClass.userTeacher.user.lastName.length - 1]}
                                        </Text> */}
                                        <Text style={styles.descAula}>{currentClass.name}</Text>
                                    </View>
                                </View>
                                <View style={styles.cardDescSala}>
                                    <Text style={styles.titleAula}>{currentClass.classroom.name} - {currentClass.classroom.floor}° Andar</Text>
                                    <Text style={styles.descSala}>Começa às {formatTime(currentClass.time)} horas</Text>
                                </View>


                            </TouchableOpacity>
                        )
                    })
                )}

            </ScrollView>
            <View style={{ width: '100%' }}>
                <TouchableOpacity style={[
                    classes.length > 0 ? styles.botaoVerMais1 : styles.botaoVerMais2
                ]}
                    onPress={() => navigation.navigate("Calendário")}>
                    <Text style={styles.textoBotaoVerMais}>Ver mais</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProximasAulas;