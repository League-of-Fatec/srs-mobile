
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import styles from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BotaoSala = () => {
    return (
        <View style={styles.botaoSala}>
            <Text style={styles.nomeSala}>Sala 10</Text>
            <Ionicons
                style={styles.infoIcons} name='desktop-outline'
            />
        </View>
    )
}

export default BotaoSala;