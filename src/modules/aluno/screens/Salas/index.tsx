import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Header from '@/components/shared/HeaderEstatico';
import Sala from './components/Sala';


export default function Salas() {

    return (
        <View style={styles.container}>
            <Header title='Salas' />
            <Sala />
        </View>
    );
}

