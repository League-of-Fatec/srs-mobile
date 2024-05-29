import React, { useState } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import styles from './styles';
import Header from '@/components/shared/HeaderEstatico';
import { Calendar, DateData } from 'react-native-calendars';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { api_url_local } from '@/utils/API_URLS';
import { useSelector } from 'react-redux';
import { ProfessorState } from '@/redux/UserSlice';
import { ResponseReservationsJson } from './utils/ResponseReservationsType';
import { err } from 'react-native-svg';
import { COLORS } from '@/utils/COLORS_APP_LIGHT';
import { formatDate } from 'date-fns';
import { ModalReservaCalendarioCancel } from './components/ModalReservaCalendarioCancel';


export default function Calendario() {
    const professor = useSelector((state: { professor: ProfessorState }) => state.professor);
    const [modalVisible, setModalVisibility] = useState(false);

    const [selected, setSelected] = useState<string>('');
    const [isDayPress, setDayPressed] = useState(false);

    const [reservations, setReservations] = useState<ResponseReservationsJson>([]);
    const [selectedReservation, setSelectedReservation] = useState<number | null>(null);
    const [reservationId, setReservationId] = useState<number | null>(null);

    const handleDayPressed = async (day: DateData) => {

        try {
            const response = await fetch(`${api_url_local}/reservations/${professor.professor?.id}/${day.dateString}`)
            const responseReservations: ResponseReservationsJson = await response.json();
            setReservations(responseReservations);
        } catch (error) {
            console.log(error);
        }

    }

    const formatTime = (time: string): string => {
        const formattedTime = time.split(":").slice(0, -1).join(":");
        return formattedTime;
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
            <View style={{ flex: 0.5, marginTop: 15 }}>

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
                                                selectedReservation === reservation.id ? { backgroundColor: COLORS.corSecundaria2 } : null
                                            ]

                                            }>
                                                <Ionicons
                                                    style={styles.icons} name='desktop-outline'
                                                />

                                                <View style={styles.reservationInfo}>
                                                    <Text style={styles.textTime}>{formatTime(reservation.start_time)} - {formatTime(reservation.end_time)}</Text>
                                                    <Text style={styles.textClassroomFloor}>{reservation.classroom.name} - {reservation.classroom.floor}° Andar</Text>
                                                    <Text style={styles.textCourseName}>{reservation.class.course.name}</Text>
                                                    <Text style={styles.textClassName}>{reservation.class.name}</Text>
                                                </View>


                                            </View>
                                            {selectedReservation === reservation.id && (
                                                <View style={[
                                                    styles.viewCancelReservationButton,
                                                    selectedReservation === reservation.id ? { backgroundColor: COLORS.corSecundaria2 } : null
                                                ]}>
                                                    <TouchableOpacity style={styles.cancelReservationButton}
                                                        onPress={() => {
                                                            setReservationId(reservation.id)
                                                            setModalVisibility(true);
                                                        }}
                                                    >
                                                        <Text style={styles.cancelReservationTextButton}>Cancelar Reserva</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            )}
                                        </TouchableOpacity>


                                    </View>
                                    <View style={styles.linhaOpcoes} />
                                </View>
                            );
                        }
                    })}
                </ScrollView>
            </View>
            <ModalReservaCalendarioCancel
                modalVisible={modalVisible}
                setModalVisibility={setModalVisibility}
                reservationId={reservationId}
                setReservationId={setReservationId}
                reservations={reservations}
                setReservations={setReservations}
            />
        </View>

    );

}

