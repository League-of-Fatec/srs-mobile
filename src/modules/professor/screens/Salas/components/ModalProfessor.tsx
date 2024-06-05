import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Modal, Alert, Pressable, TextInput, Button, BackHandler } from 'react-native';
import styles from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ClassRoom, ResponseFavoriteClassroom } from '../types/ClassroomTypes';
import { Calendar, DateData } from 'react-native-calendars';
import { RadioButton } from 'react-native-paper';
import HorizontalRow from './HorizontalRow';
import RNPickerSelect, { Item } from 'react-native-picker-select';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { formatDate } from 'date-fns';
import { errors } from '../utils/errors';
import { ModalReservaSucesso } from './ModalReservaSucesso';
import { ModalReservaFalha } from './ModalReservaFalha';
import { ModalReservaCancel } from './ModalReservaCancel';
import { ModalReservaRevisar, ReviewCurrentData } from './ModalReservaRevisar';
import { api_url_local } from '@/utils/API_URLS';
import { useSelector } from 'react-redux';
import { ProfessorState } from '@/redux/UserSlice';
import { Class, ResponseTypeClasses } from '../types/classTypes';
import Row from './Row';
import { developing } from '@/utils/developing';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import LoadingModalProfessor from '@/components/shared/LoadingModalProfessor';
import formatarData from '@/utils/formatarData';
import { formatTime } from '@/utils/formatTime';

type ModalAlunoProps = {
    modalVisible: boolean;
    setModalVisible: (value: boolean) => void;
    selectedClassRoom: ClassRoom | null;
    setSelectedClassRoom: (value: ClassRoom | null) => void;
    courses: Item[];
};

const weekDays = [
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sab"
];

interface MarkedDates {
    [key: string]: {
        customStyles: {
            container: {
                backgroundColor: string;
            };
            text: {
                color: string;
            };
        };
    };
}



const ModalProfessor = ({ modalVisible, setModalVisible, selectedClassRoom, setSelectedClassRoom, courses }: ModalAlunoProps,) => {

    const professor = useSelector((state: { professor: ProfessorState }) => state.professor);

    const [courseId, setCourseId] = useState<number | null>(null);
    const [courseName, setCourseName] = useState<string | null>(null);
    const [subjectId, setSubjectId] = useState<number | null>(null);
    const [subjectName, setSubjectName] = useState<string | null>(null);
    const [dates, setDates] = useState<string[]>([]);
    const [beginTime, setBeginTime] = useState<string | null>(null);
    const [endTime, setEndTime] = useState<string | null>(null);
    const [reason, setReason] = useState<string | null>(null);
    const [availability, setAvailability] = useState<string>('S');
    const [rating, setRating] = useState(0);
    const [favoriteClassroomId, setFavoriteClassroomId] = useState<number | null>(null);

    const [isFinish, setFinish] = useState(true);
    const [isErrors, setErrors] = useState(errors);

    const [isClassesVisible, setClassesVisibility] = useState(true);

    const [isBeginTimePickerVisible, setBeginTimePickerVisibility] = useState(false);
    const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);
    const [isButtonEndTimeVisible, setButtonEndTimeVisibility] = useState(true);

    const [markedDates, setMarkedDates] = useState<MarkedDates>({});
    const [classes, setClasses] = useState<Item[]>([]);


    const [visibilityModalReservaSucesso, setVisibilityModalReservaSucesso] = useState(false);
    const [visibilityModalReservaFalha, setVisibilityModalReservaFalha] = useState(false);
    const [visibilityModalReservaCancel, setVisibilityModalReservaCancel] = useState(false);
    const [visibilityModalReservaRevisar, setVisibilityModalReservaRevisar] = useState(false);

    const [reviewData, setReviewData] = useState<ReviewCurrentData | null>(null);


    const [isLoading, setLoading] = useState(false);

    const colors = ["yellow", "green", "blue", "purple", "pink"];

    const showBeginTimePicker = () => {
        setBeginTimePickerVisibility(true);
    };
    const showEndTimePicker = () => {
        setEndTimePickerVisibility(true);
    };

    const hideBeginTime = () => {
        setBeginTimePickerVisibility(false);
    };
    const hideEndTime = () => {
        setEndTimePickerVisibility(false);
    };



    const handleConfirmTimeBegin = (date: Date) => {
        date.setHours(date.getHours() - 1);
        const dateTime = date.toLocaleString("pt-br", { timeZone: 'America/Sao_Paulo' });
        const time = dateTime.split(" ")[1];

        const hour = date.getHours() + 1;
        if (hour < 6 || hour > 23) {
            hideBeginTime();
            setBeginTime("");
            Alert.alert('Erro!', 'Os horários de reservas permitidos são entre as 06:00 da manhã e as 23:00 da noite!');
            return;
        }

        setBeginTime(time);
        hideBeginTime();
    };

    const handleConfirmTimeEnd = (date: Date) => {
        date.setHours(date.getHours() - 1);
        const dateTime = date.toLocaleString("pt-br", { timeZone: 'America/Sao_Paulo' });
        const time = dateTime.split(" ")[1];

        const hour = date.getHours() + 1;
        if (hour < 6 || hour > 23) {
            hideEndTime();
            setEndTime("");
            Alert.alert('Erro!', 'Os horários de reservas permitidos são entre as 06:00 da manhã e as 23:00 da noite!');
            return;
        }

        if (beginTime) {
            const beginHour = beginTime.split(":")[0];

            // Lembrar de perguntar sobre a hr igual
            if (parseInt(beginHour) > hour) {
                hideEndTime();
                setBeginTime("");
                setEndTime("");
                Alert.alert('Erro!', 'A hora de inicio está maior ou igual que a de fim, preencha os horários novamente!');
                return;
            }
        }

        if (time === beginTime) {
            hideEndTime();
            setBeginTime("");
            setEndTime("");
            Alert.alert('Algo deu errado!', 'Os horários de início e fim não podem ser os mesmos. Por favor, selecione um horário diferente.');
            return;
        }

        setEndTime(time);
        hideEndTime();

    };

    function aleatorizarCor() {
        return colors[Math.floor(Math.random() * 5)];
    }

    // const handleDayPress = (day: DateData) => {
    const handleDayPress = (day: DateData) => {



        // Verifica se o dia já está marcado
        if (markedDates[day.dateString]) {
            // Cria uma cópia do estado anterior
            const newState = { ...markedDates };
            // Remove o dia marcado
            delete newState[day.dateString];
            // Remove a data do array de datas
            const index = dates.indexOf(day.dateString);
            if (index > -1) {
                dates.splice(index, 1);
            }
            setMarkedDates(newState);
        } else {
            // Adiciona o dia marcado
            if (dates.length >= 12) {
                Alert.alert("Erro", "Só é possível fazer 12 reservas consecutivas!");
                return;
            }

            const newState = {
                ...markedDates,
                [day.dateString]: {
                    customStyles: {
                        container: {
                            backgroundColor: aleatorizarCor()
                        },
                        text: {
                            color: 'black'
                        }
                    }
                }
            };
            dates.push(day.dateString);
            setMarkedDates(newState);
        }
    }

    const whenClose = () => {
        setModalVisible(false);
        setMarkedDates({});
        setBeginTime(null);
        setEndTime(null);
        setCourseId(null);
        setCourseName(null);
        setSubjectId(null);
        setSubjectName(null);
        setDates([]);
        setReviewData(null);
        setReason(null);
        setFavoriteClassroomId(null);
        setRating(0);
    }

    const alertarModalProfessor = async () => {
        // Aqui você pode colocar a lógica para pegar as informações e enviar para a API


        const promises = dates.map(async (date) => {
            const data = {
                teacherId: professor.professor?.id,
                classId: subjectId,
                classroomId: selectedClassRoom?.id,
                date,
                start_time: beginTime,
                end_time: endTime,
                availableForExchange: availability,
                reason,
            };


            try {
                const response = await fetch(`${api_url_local}/reservation`, {
                    body: JSON.stringify(data),
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

            } catch (error) {
                console.error(error);
            }
        });
        await Promise.all(promises);
    };

    const setClassesByCourse = async (value: string) => {
        if (!value) {
            courses = [];
            setClasses([]);
            setClassesVisibility(true);
            return;
        }

        // courseId e teacherId
        try {
            const responseClasses = await fetch(`${api_url_local}/classes/courses/${value}/teacher/${professor.professor?.id}`, {
                method: 'GET'
            }
            );

            const responseClassesJson: ResponseTypeClasses = await responseClasses.json();
            const classesMapeadas = responseClassesJson.map((item: Class, index) => {
                return { label: item.name, value: [item.id, item.name], key: item.id };
            });
            setClasses(classesMapeadas);
            setClassesVisibility(false);
        } catch (error) {
            console.error(error);
        }

    }

    const handleReason = (reason: string) => {

        if (reason.length < 280) {
            setReason(reason);
        }
    }

    useEffect(() => {
        if (
            courseId &&
            subjectId &&
            dates.length > 0 &&
            beginTime &&
            endTime &&
            reason
        ) {
            setFinish(false);
        } else {
            setFinish(true);
        }

    }, [courseId, subjectId, dates, beginTime, reason]);


    const handleReviewData = () => {
        let disponibilidade = "";

        if (availability === "S") {
            disponibilidade = "Sim";
        } else if (availability === "N") {
            disponibilidade = "Não";
        }

        const currentData = {
            classroomName: selectedClassRoom?.name,
            dates,
            beginTime,
            endTime,
            courseName,
            subjectName,
            disponibilidade,
            reason

        };
        setReviewData(currentData);
    }

    useEffect(() => {
        if (!modalVisible) {
            whenClose();
        }
    }, [modalVisible]);

    useEffect(() => {
        if (beginTime === "" || beginTime == null) {
            setButtonEndTimeVisibility(true);
        } else {
            setButtonEndTimeVisibility(false);
        }
    }, [beginTime]);



    useEffect(() => {
        const getFavoriteClassroom = async () => {

            setLoading(true);
            if (!selectedClassRoom?.id) return;

            try {
                const responseFavoriteClassroom = await fetch(`${api_url_local}/favoriteClassroom/${professor.professor?.id}/${selectedClassRoom?.id}`, {
                    method: "GET",
                });
                const responseFavoriteClassroomJson = await responseFavoriteClassroom.json();

                if (responseFavoriteClassroomJson.length > 0) {
                    setFavoriteClassroomId(responseFavoriteClassroomJson[0].id);
                    setRating(1);
                } else {
                    setRating(0);
                }

            } catch (error) {
                console.error("Erro no get: ", error);
                setRating(0);
            } finally {
                setLoading(false);
            }
        }

        getFavoriteClassroom();
    }, [modalVisible]);

    const handleFavoriteClassroomRating = () => {
        if (rating === 1) {
            removeFavoriteClassroom();
        }
        if (rating === 0) {
            addFavoriteClassroom();
        }
    }

    const addFavoriteClassroom = async () => {

        const data = {
            teacherId: professor.professor?.id,
            classroomId: selectedClassRoom?.id,
        };

        try {
            const response = await fetch(`${api_url_local}/favoriteClassroom`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseJson: ResponseFavoriteClassroom = await response.json();
            setFavoriteClassroomId(responseJson.data[0].id);
            if (responseJson) return;
        } catch (error) {
            console.error("Erro no add: ", error);
        } finally {
            setRating(1);
        }

    }

    const removeFavoriteClassroom = async () => {
        try {
            await fetch(`${api_url_local}/favoriteClassroom/${favoriteClassroomId}`, {
                method: 'DELETE',
            });

        } catch (error) {
            console.error("Erro no delete: ", error);
        } finally {
            setRating(0);
        }
    }



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
                    {isLoading ? (
                        <LoadingModalProfessor />
                    ) : (
                        <ScrollView>
                            <View style={styles.viewNameClassroomStar}>
                                <View style={styles.ratingView}>
                                    <Text style={styles.modalNomeSala}>{selectedClassRoom?.name}</Text>
                                    <TouchableOpacity onPress={() => handleFavoriteClassroomRating()}>
                                        <StarRatingDisplay
                                            rating={rating}
                                            maxStars={1}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={() => whenClose()}>
                                    <Ionicons
                                        style={styles.iconClose} name='close'
                                    />
                                </TouchableOpacity>

                            </View>


                            <View style={styles.viewItens}>
                                <Text style={styles.textItens}>Itens</Text>
                                <View style={styles.viewItensSalas}>
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
                            <Row />

                            <View style={styles.timelineContainer}>
                                <Text style={styles.timelineTitle}>Cronograma</Text>

                                <ScrollView horizontal={true}>
                                    {weekDays.map((weekDay, index) => {
                                        return (
                                            <View style={styles.timelineWeekDayView} key={index}>
                                                <View style={styles.timelineTextView}>
                                                    <Text style={styles.timelineText}>{weekDay}</Text>
                                                </View>
                                                <View style={styles.viewTimelineContainer}>
                                                    <View style={styles.viewTimeline}>
                                                        <Text style={styles.timeViewTimeline}>19:00 - 20:40</Text>
                                                        <Text style={styles.nameViewTimeline}>Geraldo Vicent</Text>
                                                    </View>
                                                    <View style={styles.viewTimeline}>
                                                        <Text style={styles.timeViewTimeline}>19:00 - 20:40</Text>
                                                        <Text style={styles.nameViewTimeline}>Geraldo Vicent</Text>
                                                    </View>
                                                    <View style={styles.viewTimeline}>
                                                        <Text style={styles.timeViewTimeline}>19:00 - 20:40</Text>
                                                        <Text style={styles.nameViewTimeline}>Geraldo Vicent</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    })}
                                </ScrollView>
                                <TouchableOpacity style={styles.timelineButton} onPress={() => developing()}>
                                    <Text style={styles.timelineTextButton}>Mais Detalhes</Text>
                                </TouchableOpacity>
                            </View>

                            <Row />

                            <Text style={styles.titleReservation}>Reserva</Text>
                            <View style={styles.containerCourses}>
                                <Text style={styles.courseName}>Curso:</Text>
                                <RNPickerSelect
                                    onValueChange={(value) => {
                                        setCourseId(parseInt(value[0]));
                                        setCourseName(value[1]);
                                        setClassesByCourse(value[0]);
                                    }}
                                    placeholder={{ label: "Escolha o curso:", value: "" }}
                                    items={courses}
                                />
                                {!courseId ? (
                                    <Text style={styles.textError}>{errors.course.text}</Text>
                                ) : (
                                    <Text style={styles.textError}></Text>
                                )}
                            </View>
                            <View style={styles.containerClasses}>
                                <Text style={styles.classTitle}>Matéria:</Text>
                                <RNPickerSelect
                                    onValueChange={(value) => {

                                        setSubjectId(parseInt(value[0]));
                                        setSubjectName(value[1]);

                                    }}
                                    placeholder={{ label: "Escolha a matéria:", value: "" }}
                                    items={classes}
                                    disabled={isClassesVisible}
                                />
                                {!subjectId ? (
                                    <Text style={styles.textError}>{errors.subject.text}</Text>
                                ) : (
                                    <Text style={styles.textError}></Text>
                                )}

                            </View>

                            <View style={styles.containerCalendar}>
                                <Calendar
                                    markingType='custom'
                                    onDayPress={handleDayPress}
                                    markedDates={{
                                        ...markedDates
                                    }}
                                    minDate={formatDate(new Date(), 'yyyy-MM-dd')}
                                    maxDate={formatDate(new Date(new Date().getFullYear(), 11, 31), 'yyyy-MM-dd')}
                                    theme={{
                                        arrowColor: '#6D1C1C',
                                        todayTextColor: '#6D1C1C',
                                    }}
                                />
                            </View>
                            <View style={styles.containerReservation}>
                                <HorizontalRow />
                                <View style={styles.startAndEndDate}>

                                    <View style={styles.containerDate}>
                                        <Text style={styles.dateLabel1}>Data da reserva: </Text>
                                        <View style={styles.viewDates}>

                                            {dates.map((date, index) => {
                                                if (index % 2 === 0) {
                                                    return (
                                                        <View key={index} style={styles.centeredDate}>
                                                            <Text style={styles.reservatedDateText}>{formatarData(date)}</Text>
                                                            {dates[index + 1] && <Text style={styles.reservatedDateText}>{formatarData(dates[index + 1])}</Text>}
                                                        </View>
                                                    );
                                                } else {
                                                    return null;
                                                }
                                            })}

                                        </View>

                                        {/* <View style={{ flexDirection: 'column' }}>
                                                {dates.map((date, index) => {
                                                    return <Text style={styles.reservatedDateText} key={index}>{date.split('-').reverse().join("-").replaceAll("-", "/")}</Text>;
                                                })}
                                            </View> */}
                                    </View>
                                </View>
                                <View style={styles.selectTimeView}>
                                    <View style={{ borderBottomColor: '#DBDBDB', borderBottomWidth: 0.5, marginVertical: 10, width: '30%', marginRight: 10 }} />
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Selecione um horário</Text>
                                    <View style={{ borderBottomColor: '#DBDBDB', borderBottomWidth: 0.5, marginVertical: 10, width: '30%', marginLeft: 10 }} />
                                </View>

                                <View style={styles.startAndEndTime}>
                                    <View style={styles.labelTimeView}>
                                        <TouchableOpacity style={styles.labelTime} onPress={showBeginTimePicker}>
                                            <Text style={styles.labelTimeText}>Inicio</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={[
                                                styles.labelTime,
                                                { opacity: isButtonEndTimeVisible ? 0.5 : 1 }
                                            ]}
                                            onPress={showEndTimePicker}
                                            disabled={isButtonEndTimeVisible}
                                        >
                                            <Text style={styles.labelTimeText}>Fim</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.valueTimeView}>
                                        <Text style={styles.valueTime}>{formatTime(beginTime)}</Text>
                                        <Text style={styles.valueTime}>{formatTime(endTime)}</Text>
                                    </View>

                                    <DateTimePickerModal
                                        isVisible={isBeginTimePickerVisible}
                                        mode="time"
                                        is24Hour={true}
                                        onConfirm={handleConfirmTimeBegin}
                                        onCancel={hideBeginTime}
                                    />
                                    <DateTimePickerModal
                                        isVisible={isEndTimePickerVisible}
                                        mode="time"
                                        is24Hour={true}
                                        onConfirm={handleConfirmTimeEnd}
                                        onCancel={hideEndTime}
                                    />

                                </View>
                                {!beginTime || !endTime ? (
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
                                    <Text>Motivo</Text>
                                    <TextInput style={styles.reasonTextInput}
                                        multiline={true}
                                        placeholder='Esta mensagem será encaminhada
                                    para o professor - Limite 280 caracteres'
                                        onChangeText={(value) => handleReason(value)}
                                        maxLength={280}

                                    />

                                    {!reason ? (
                                        <Text style={styles.textError}>{errors.reason.text}</Text>
                                    ) : (
                                        <Text style={styles.textError}></Text>
                                    )}
                                </View>

                                <HorizontalRow />
                                <View>
                                    <Text>Disponível para troca?</Text>
                                    <View style={{}}>
                                        <RadioButton.Group
                                            onValueChange={newValue => setAvailability(newValue)}
                                            value={availability}
                                        >
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <RadioButton value="S" />
                                                <Text>Sim</Text>
                                                <RadioButton value="N" />
                                                <Text>Não</Text>
                                            </View>

                                        </RadioButton.Group>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                <TouchableOpacity
                                    style={styles.buttonClose}
                                    onPress={() => setVisibilityModalReservaCancel(true)}>
                                    <Text style={styles.textStyle}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    disabled={isFinish}
                                    style={[
                                        styles.buttonConfirm,
                                        { opacity: isFinish ? 0.5 : 1 }
                                    ]}

                                    onPress={() => {
                                        handleReviewData();
                                        setVisibilityModalReservaRevisar(true)
                                    }}>
                                    <Text style={styles.textStyle}>Confirmar</Text>
                                </TouchableOpacity>
                            </View>

                            <ModalReservaSucesso
                                visibilityModalReservaSucesso={visibilityModalReservaSucesso}
                                setVisibilityModalReservaSucesso={setVisibilityModalReservaSucesso}
                                setVisibilityModalProfessor={setModalVisible}

                            />
                            <ModalReservaFalha
                                visibilityModalReservaFalha={visibilityModalReservaFalha}
                                setVisibilityModalReservaFalha={setVisibilityModalReservaFalha}
                            />
                            <ModalReservaCancel
                                visibilityModalReservaCancel={visibilityModalReservaCancel}
                                setVisibilityModalReservaCancel={setVisibilityModalReservaCancel}
                                setModalVisible={setModalVisible}
                                whenClose={whenClose}
                            />
                            <ModalReservaRevisar
                                alertModalProfessor={alertarModalProfessor}
                                visibilityModalReservaRevisar={visibilityModalReservaRevisar}
                                setVisibilityModalReservaRevisar={setVisibilityModalReservaRevisar}
                                visibilityModalReservaSucesso={visibilityModalReservaSucesso}
                                setVisibilityModalReservaSucesso={setVisibilityModalReservaSucesso}
                                data={reviewData}
                            />
                        </ScrollView>
                    )}
                </View>

            </View>
        </Modal>
    )
}

export default ModalProfessor;