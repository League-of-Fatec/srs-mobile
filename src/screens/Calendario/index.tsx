import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import {addDays, format, getDate, isSameDay, startOfWeek} from 'date-fns';
import styles from './styles';
import WeekCalendar from './calendario';

type Props ={
    date: Date;
}

export default function Calendario() {

    const [date, setDate] = useState(new Date());


    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerTitulo}>Calendário</Text>
            </View>
            <View style={styles.containerMA}>
                <Text style={styles.mesEano}>Mês - Ano</Text>
            </View>
            
            <View style={styles.container}>
              <WeekCalendar date={date} onChange={(newDate) => setDate(newDate)} />
            </View>
        </View>

    );

}

