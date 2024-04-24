import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import styles from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BotaoSala from './BotaoSala';

const Sala = () => {

    const [corBotao, setarCorBotao] = useState(['#6DCE31', '#FAAF40', '#B54646']);

    const andaresSalas = [
        {
            nomeAndar: "1° Andar",
            salas: [
                {
                    nomeSala: "Sala 10",
                    icon: "",
                    situacao: 0
                },
                {
                    nomeSala: "Sala 11",
                    icon: "",
                    situacao: 1
                },
                {
                    nomeSala: "Sala 12",
                    icon: "",
                    situacao: 2
                },
                {
                    nomeSala: "Sala 13",
                    icon: "",
                    situacao: 0
                },
                {
                    nomeSala: "Sala 8",
                    icon: "",
                    situacao: 0
                },
                {
                    nomeSala: "Sala 9",
                    icon: "",
                    situacao: 2
                }
            ]
        },
        {
            nomeAndar: "2° Andar",
            salas: [
                {
                    nomeSala: "Sala 20",
                    icon: "",
                    situacao: 0
                },
                {
                    nomeSala: "Sala 21",
                    icon: "",
                    situacao: 1
                },
                {
                    nomeSala: "Sala 22",
                    icon: "",
                    situacao: 2
                },
                {
                    nomeSala: "Sala 26",
                    icon: "",
                    situacao: 0
                },
                {
                    nomeSala: "Sala 27",
                    icon: "",
                    situacao: 0
                },
                {
                    nomeSala: "Sala 28",
                    icon: "",
                    situacao: 2
                },
            ]
        }
    ]

    return (

        <View style={styles.containerAndares}>
            {andaresSalas.map((andarSala, index) => (
                <View style={styles.containerSalas} key={index}>
                    <Text style={styles.nomeAndar}>{andarSala.nomeAndar}</Text>
                    <ScrollView style={styles.scrollSalas}>
                        {andarSala.salas.map((sala, index) => (
                            <TouchableOpacity style={[styles.botaoSala, { backgroundColor: corBotao[sala.situacao] }]} key={index}>
                                <Text style={styles.nomeSala}>{sala.nomeSala}</Text>
                                <Ionicons
                                    style={styles.infoIcons} name='desktop-outline'
                                />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                </View>
            ))}
        </View>
    );
}

export default Sala;