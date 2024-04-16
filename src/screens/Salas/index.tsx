import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/HeaderEstatico';
import Sala from './components/Sala';


export default function Salas() {

    return (

        <View style={styles.container}>
            <Header title='Salas' />
            <Sala />
        </View>
    );
}

