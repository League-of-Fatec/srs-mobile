import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Modal, Alert, Pressable, TextInput, Button } from 'react-native';
import styles from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ClassRoom } from '../types/ClassroomTypes';
import { Picker } from '@react-native-picker/picker';
import { Calendar, DateData } from 'react-native-calendars';
import { RadioButton } from 'react-native-paper';
import HorizontalRow from './HorizontalRow';
import RNPickerSelect, { Item } from 'react-native-picker-select';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { eachDayOfInterval, format } from 'date-fns';
import { errors } from '../utils/errors';
import { ModalReservaSucesso } from './ModalReservaSucesso';
import { ModalReservaFalha } from './ModalReservaFalha';
import { ModalReservaCancel } from './ModalReservaCancel';
import { ModalReservaRevisar } from './ModalReservaRevisar';
import { api_url_local } from '@/utils/API_URLS';
import { err } from 'react-native-svg';
import { ResponseTypeCourses } from '../types/CourseTypes';

type ModalAlunoProps = {
    modalVisible: boolean;
    setModalVisible: (value: boolean) => void;
    selectedClassRoom: ClassRoom | null;
    setSelectedClassRoom: (value: ClassRoom | null) => void;
    courses: Item[];
    classes: Item[];
};

type MarkedDatesType = {
    [key: string]: {
        startingDay?: boolean;
        endingDay?: boolean;
        color: string;
        textColor: string;
    };
};


const ModalProfessor = ({ modalVisible, setModalVisible, selectedClassRoom, setSelectedClassRoom, courses, classes }: ModalAlunoProps,) => {

    const [availability, setAvailability] = useState('S');
    const [isSubject, setSubject] = useState("")
    const [isCourse, setCourse] = useState("")
    const [isErrors, setErrors] = useState(errors);

    const [isBeginTimePickerVisible, setBeginTimePickerVisibility] = useState(false);
    const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);
    const [isBeginTime, setBeginTime] = useState("");
    const [isEndTime, setEndTime] = useState("");

    const [minimumDate, setMinimumDate] = useState('');
    const [maximumDate, setMaximumDate] = useState('');
    const [markedDates, setMarkedDates] = useState<MarkedDatesType>({})
    const [times, setTimes] = useState(0);

    const [isReason, setReason] = useState("");

    const [visibilityModalReservaSucesso, setVisibilityModalReservaSucesso] = useState(false);
    const [visibilityModalReservaFalha, setVisibilityModalReservaFalha] = useState(false);
    const [visibilityModalReservaCancel, setVisibilityModalReservaCancel] = useState(false);
    const [visibilityModalReservaRevisar, setVisibilityModalReservaRevisar] = useState(false);



    const showBeginTimePicker = () => {
        setBeginTimePickerVisibility(true);
    };
    const showEndTimePicker = () => {
        setEndTimePickerVisibility(true);
    };

    const hideBeginningTime = () => {
        setBeginTimePickerVisibility(false);
    };
    const hideEndTime = () => {
        setEndTimePickerVisibility(false);
    };

    const handleConfirmTimeBegin = (date: Date) => {
        date.setHours(date.getHours() - 1);
        const dateTime = date.toLocaleString("pt-br", { timeZone: 'America/Sao_Paulo' });
        const time = dateTime.split(" ")[1];
        console.warn("A date has been picked: ", date.toLocaleString("pt-br", { timeZone: 'America/Sao_Paulo' }));
        setBeginTime(time);
        hideBeginningTime();
    };

    const handleConfirmTimeEnd = (date: Date) => {
        date.setHours(date.getHours() - 1);
        const dateTime = date.toLocaleString("pt-br", { timeZone: 'America/Sao_Paulo' });
        const time = dateTime.split(" ")[1];
        console.warn("A date has been picked: ", date.toLocaleString("pt-br", { timeZone: 'America/Sao_Paulo' }));
        setEndTime(time);
        hideEndTime();
    };


    const handleDayPress = (day: DateData) => {

        if (times == 0) {
            setMinimumDate(day.dateString);
            setTimes(times + 1);
        } else if (times == 1) {
            setMaximumDate(day.dateString);
            setTimes(times + 1);
        } else if (times == 2) {
            setMinimumDate(day.dateString);
            setTimes(1);
        }
    }

    const parseLocalDate = (dateString: string) => {
        const [year, month, day] = dateString.split('-').map(Number);
        return new Date(year, month - 1, day);
    };

    useEffect(() => {
        if (minimumDate && maximumDate && times === 2) {
            markDays();
        }
    }, [minimumDate, maximumDate, times]);

    const markDays = () => {
        const startDate = parseLocalDate(minimumDate);
        const endDate = parseLocalDate(maximumDate);

        let newMarkedDates: { [date: string]: any } = {};

        eachDayOfInterval({ start: startDate, end: endDate }).forEach((date) => {
            const dateString = format(date, 'yyyy-MM-dd');
            if (dateString === minimumDate) {
                newMarkedDates[dateString] = { startingDay: true, color: 'red', marked: true };
            } else if (dateString === maximumDate) {
                newMarkedDates[dateString] = { endingDay: true, color: 'yellow', marked: true };
            } else {
                newMarkedDates[dateString] = { color: 'green', marked: true };
            }
        });

        setMarkedDates(newMarkedDates);
    }




    const whenClose = () => {
        setModalVisible(!modalVisible);
        setMaximumDate("");
        setMinimumDate("");
        setTimes(0);
        setMarkedDates({});
        setBeginTime("");
        setEndTime("");
        setCourse("");
        setSubject("");
    }

    const alertarModalProfessor = async () => {
        // Aqui você pode colocar a lógica para pegar as informações e enviar para a API

        const data = {
            date: minimumDate,
            start_time: isBeginTime,
            end_time: isEndTime
        };

        // try {
        //     const response = await fetch(`${api_url_local}/reservation`, {
        //         body: JSON.stringify(data),
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     });

        //     const responseJson = response.json();
        //     console.log(responseJson)
        // } catch (error) {
        //     console.error(error);
        // }
        console.warn(data);
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ScrollView>
                        <View>
                            <Text style={styles.modalNomeSala}>{selectedClassRoom?.name}</Text>
                            <Text style={styles.modalText}>Disponivel até</Text>
                            <View style={styles.viewHorarios}>
                                <Text style={styles.modalHorario}>12:00</Text>
                                <Text style={styles.modalHorario}>12:00</Text>
                                <Text style={styles.modalHorario}>12:00</Text>
                            </View>
                        </View>
                        <View style={styles.viewItens}>
                            <Text>Itens</Text>
                            <View>
                                {selectedClassRoom?.items.map((itemClassRoom, index) => {
                                    return (
                                        <View style={styles.viewItem} key={index}>
                                            <Text style={styles.qtdItens}>{itemClassRoom.qntd}</Text>
                                            <Ionicons
                                                style={styles.iconItem} name='desktop-outline'
                                            />
                                            <Text style={styles.nomeItem}>{itemClassRoom.type}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                        <View style={styles.containerCourses}>
                            <Text style={styles.courseName}>Curso:</Text>
                            <RNPickerSelect
                                onValueChange={(value) => setCourse(value)}
                                placeholder={{ label: "Escolha o curso:", value: "" }}
                                items={courses}
                            />
                            {!isCourse ? (
                                <Text style={styles.textError}>{errors.course.text}</Text>
                            ) : (
                                <Text style={styles.textError}></Text>
                            )}
                        </View>
                        <View style={styles.containerSubjects}>
                            <Text style={styles.subjectName}>Matéria:</Text>
                            <RNPickerSelect
                                onValueChange={(value) => setSubject(value)}
                                placeholder={{ label: "Escolha a matéria:", value: "" }}
                                items={classes}
                            />
                            {!isSubject ? (
                                <Text style={styles.textError}>{errors.subject.text}</Text>
                            ) : (
                                <Text style={styles.textError}></Text>
                            )}

                        </View>

                        <View style={styles.containerCalendar}>
                            <Calendar
                                markingType='period'
                                onDayPress={handleDayPress}
                                markedDates={{
                                    [minimumDate]: { startingDay: true, marked: true, color: 'red' },
                                    [maximumDate]: { endingDay: true, marked: true, color: 'yellow' },
                                    ...markedDates
                                }}
                                theme={{
                                    arrowColor: '#6D1C1C',
                                    todayTextColor: '#6D1C1C',
                                }}
                            />
                        </View>
                        <View style={styles.containerReservation}>
                            <HorizontalRow />
                            <View style={styles.startAndEndDate}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>Data Inicio: </Text>
                                    <Text>{minimumDate.split('-').reverse().join("-").replaceAll("-", "/")}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>Data Fim: </Text>
                                    <Text>{maximumDate.split('-').reverse().join("-").replaceAll("-", "/")}</Text>
                                </View>
                                {!minimumDate || !maximumDate ? (
                                    <Text style={styles.textError}>{errors.chooseDate.text}</Text>
                                ) : (
                                    <Text style={styles.textError}></Text>
                                )

                                }
                            </View>
                            <View style={styles.selectTimeView}>
                                <View style={{ borderBottomColor: '#DBDBDB', borderBottomWidth: 0.5, marginVertical: 10, width: '30%', marginRight: 10 }} />
                                <Text style={{ fontSize: 18 }}>Selecione um horário</Text>
                                <View style={{ borderBottomColor: '#DBDBDB', borderBottomWidth: 0.5, marginVertical: 10, width: '30%', marginLeft: 10 }} />
                            </View>

                            <View style={styles.startAndEndTime}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={showBeginTimePicker}>
                                        <Text>Inicio: </Text>
                                    </TouchableOpacity>
                                    <Text>{isBeginTime}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={showEndTimePicker}>
                                        <Text>Fim: </Text>
                                    </TouchableOpacity>
                                    <Text>{isEndTime}</Text>
                                </View>

                                <DateTimePickerModal
                                    isVisible={isBeginTimePickerVisible}
                                    mode="time"
                                    is24Hour={true}
                                    onConfirm={handleConfirmTimeBegin}
                                    onCancel={hideBeginningTime}
                                />
                                <DateTimePickerModal
                                    isVisible={isEndTimePickerVisible}
                                    mode="time"
                                    is24Hour={true}
                                    onConfirm={handleConfirmTimeEnd}
                                    onCancel={hideEndTime}
                                />

                            </View>
                            {!isBeginTime || !isEndTime ? (
                                <Text style={[styles.textError, {
                                    textAlign: 'center'
                                }]}>{errors.chooseTime.text}</Text>
                            ) : (
                                <Text style={[styles.textError, {
                                    textAlign: 'center'
                                }]}></Text>
                            )}

                            <HorizontalRow />
                            <View>
                                <Text>Disponível para troca?</Text>
                                <View style={{}}>
                                    <RadioButton.Group
                                        onValueChange={newValue => setAvailability(newValue)}
                                        value={availability}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <RadioButton value='S' />
                                            <Text>Sim</Text>
                                            <RadioButton value='N' />
                                            <Text>Não</Text>
                                        </View>

                                    </RadioButton.Group>
                                </View>
                            </View>
                            <HorizontalRow />
                            <View>
                                <Text>Motivo</Text>
                                <TextInput style={styles.reasonTextInput}
                                    multiline={true}
                                    placeholder='Esta mensagem será encaminhada
                                    para o professor - Limite 280 caracteres'
                                    onChangeText={(value) => setReason(value)}

                                />

                                {!isReason ? (
                                    <Text style={styles.textError}>{errors.reason.text}</Text>
                                ) : (
                                    <Text style={styles.textError}></Text>
                                )}

                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setVisibilityModalReservaRevisar(true)}>
                                    <Text style={styles.textStyle}>Confirmar Reserva</Text>
                                </Pressable>
                                <ModalReservaSucesso
                                    visibilityModalReservaSucesso={visibilityModalReservaSucesso}
                                    setVisibilityModalReservaSucesso={setVisibilityModalReservaSucesso}
                                />
                                <ModalReservaFalha
                                    visibilityModalReservaFalha={visibilityModalReservaFalha}
                                    setVisibilityModalReservaFalha={setVisibilityModalReservaFalha}
                                />
                                <ModalReservaCancel
                                    visibilityModalReservaCancel={visibilityModalReservaCancel}
                                    setVisibilityModalReservaCancel={setVisibilityModalReservaCancel}
                                    setModalVisible={setModalVisible}
                                />
                                <ModalReservaRevisar
                                    alertModalProfessor={alertarModalProfessor}
                                    visibilityModalReservaRevisar={visibilityModalReservaRevisar}
                                    setVisibilityModalReservaRevisar={setVisibilityModalReservaRevisar}
                                />
                            </View>
                        </View>


                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setVisibilityModalReservaCancel(true)}>
                            <Text style={styles.textStyle}>Fechar</Text>
                        </Pressable>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

export default ModalProfessor;