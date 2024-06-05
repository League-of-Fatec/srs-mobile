import React, { useState } from 'react';
import { ScrollView, Text, View, } from 'react-native';
import styles from './styles';
import Header from '@/components/shared/HeaderEstatico';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { formatDate } from 'date-fns';
import { api_url_local } from '@/utils/API_URLS';
import { ResponseReservationsJson } from '@/modules/professor/screens/Calendario/utils/ResponseReservationsType';
import { currentDate } from '@/utils/currentDate';
import { useSelector } from 'react-redux';
import { StudentState } from '@/redux/UserSlice';
import { ResponseTypeReservationsByCourseIdByDate } from '../Home/types/ResponseTypeReservationsByCourseIdByDate';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { formatTime } from '@/utils/formatTime';
import { COLORS } from '@/utils/COLORS_APP_LIGHT';

export default function Calendario() {

    const { student, token } = useSelector((state: { student: StudentState }) => state.student);
    //const [date, setDate] = useState(new Date());
    const [selected, setSelected] = useState('');
    const [isDayPress, setDayPressed] = useState(false)
    const [reservations, setReservations] = useState<ResponseTypeReservationsByCourseIdByDate[]>([]);
    const [selectedReservation, setSelectedReservation] = useState<number | null>(null);




    const handleDayPressed = async (day: DateData) => {

        try {
            const fetchReservations = await fetch(`${api_url_local}/reservations/course/${student?.course.id}/${day.dateString}`);
            let responseReservationsJson: ResponseTypeReservationsByCourseIdByDate[] = await fetchReservations.json();
            responseReservationsJson = responseReservationsJson.filter(reservation => reservation.class !== null);
            setReservations(responseReservationsJson);
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <View style={styles.container}>

            <Header title='Calendário' />
            <View style={{ flex: 0.5 }}>
                <Calendar style={styles.agenda}

                    onDayPress={day => {
                        if (selected === day.dateString) {
                            setSelected("");
                            setDayPressed(false);
                            setReservations([]);
                        } else {
                            setSelected(day.dateString);
                            setDayPressed(true);
                            handleDayPressed(day);
                        }
                    }}
                    markedDates={{
                        [selected]: {
                            selected: true,
                            disableTouchEvent: false,
                            selectedColor: '#6D1C1C'
                        },
                    }}
                    minDate={formatDate(new Date(), 'yyyy-MM-dd')}
                    maxDate={formatDate(new Date(new Date().getFullYear(), 11, 31), 'yyyy-MM-dd')}
                    theme={{
                        arrowColor: '#6D1C1C',
                        todayTextColor: '#6D1C1C',
                    }}

                />
            </View>
            <View style={{ flex: 0.5, marginTop: '20%' }}>
                <ScrollView>
                    <View style={styles.linhaOpcoes} />
                    {reservations.map((reservation) => {
                        if (isDayPress) {
                            return (
                                <View key={reservation.id}>
                                    <View style={styles.containerTime}>
                                        <TouchableOpacity onPress={() => {
                                            if (selectedReservation === reservation.id) {
                                                setSelectedReservation(null);
                                            } else {
                                                setSelectedReservation(reservation.id);
                                            }
                                        }}>
                                            <View style={[
                                                styles.viewReservations,
                                            ]

                                            }>
                                                <Ionicons
                                                    style={styles.icons} name='desktop-outline'
                                                />

                                                <View style={styles.reservationInfo}>
                                                    <Text style={styles.textTime}>{formatTime(reservation.start_time)} - {formatTime(reservation.end_time)}</Text>
                                                    <Text style={styles.textClassroomFloor}>{reservation.classroom.name} - {reservation.classroom.floor}° Andar</Text>

                                                    <Text style={styles.textCourseName}>Professor(a) {reservation.userTeacher.user.firstName} {reservation.userTeacher.user.lastName.split(" ").pop()}</Text>
                                                    <Text style={styles.textCourseName}>{reservation.class.course.name}</Text>
                                                    <Text style={styles.textClassName}>{reservation.class.name}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>


                                    </View>
                                    <View style={styles.linhaOpcoes} />
                                </View>
                            );
                        }
                    })}
                </ScrollView>
            </View>
        </View>

    );

}

