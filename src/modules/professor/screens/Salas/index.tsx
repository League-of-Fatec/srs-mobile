import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import Header from '@/components/shared/HeaderEstatico';
import Sala from './components/Sala';
import { RouteProp } from '@react-navigation/native';
import { ClassRoom } from './types/ClassroomTypes';


type RootStackParamList = {
    Sala: {
        selectedRoom: ClassRoom
    };
};

export type SalaRouteProp = RouteProp<RootStackParamList, 'Sala'>;

type Props = {
    route?: SalaRouteProp;
};

export default function Salas({ route }: Props) {

    return (
        <View style={styles.container}>
            <Header title='Salas' />
            <Sala route={route} />
        </View>
    );
}

