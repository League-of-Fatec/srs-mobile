import React, { useState } from 'react';
import { ScrollView, Text, View, } from 'react-native';
import styles from './styles';
import Header from '@/components/shared/HeaderEstatico';
import { Calendar } from 'react-native-calendars';
import formatDate from './utils/formatDate';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Calendario() {

    //const [date, setDate] = useState(new Date());
    const [selected, setSelected] = useState('');
    const [truth, setTruth] = useState(false)


    const today = new Date().getDate()

    const infoDays = [
        {
            statusClass: "Próxima Aula",
            class: "LaboratórioA",
            local: "1° Andar - Sala A55",
            className: "RDC - Tipos de conexão"

        },
        {
            statusClass: "Próxima Aula",
            class: "Laboratório B",
            local: "1° Andar - Sala A112",
            className: "RDC - Tipos de conexão"

        },
        {
            statusClass: "Próxima Aula",
            class: "Laboratório C",
            local: "1° Andar - Sala A153",
            className: "RDC - Tipos de conexão"

        },
    ]

    return (
        <View style={styles.container}>

            <Header title='Calendário' />
            {/*
            <View style={styles.containerMA}>
                <Text style={styles.mesEano}>Mês - Ano</Text>
            </View>
            <WeekCalendar date={date} onChange={(newDate) => setDate(newDate)} />
            */}



            <View style={{ flex: 0.5 }}>
                <Calendar style={styles.agenda}

                    onDayPress={day => {
                        const data = formatDate(day, today);
                        setSelected(day.dateString);
                        setTruth(true)
                    }}
                    markedDates={{
                        [selected]: {
                            selected: true,
                            disableTouchEvent: false,
                            selectedColor: '#6D1C1C'
                        },
                    }}
                    theme={{
                        arrowColor: '#6D1C1C',
                        todayTextColor: '#6D1C1C',
                    }}

                />
            </View>
            <View style={{ flex: 0.5 }}>

                <ScrollView>
                    {infoDays.map((infoDay, index) => {
                        if (truth) {
                            return (
                                <View key={index}>
                                    <View style={styles.containerTime}>
                                        <View >
                                            <Ionicons
                                                style={styles.icons} name='desktop-outline'
                                            />
                                        </View>
                                        <View style={styles.timeInfo}>
                                            <Text>{infoDay.statusClass}</Text>
                                            <Text>{infoDay.class}</Text>
                                            <Text>{infoDay.local}</Text>
                                            <Text>{infoDay.className}</Text>
                                        </View>
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

