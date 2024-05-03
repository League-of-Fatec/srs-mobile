import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Modal, Alert, Pressable } from 'react-native';
import { List } from 'react-native-paper';
import styles from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BotaoSala from './BotaoSala';

type Sala = {
    nomeSala: string;
    icon: string;
    situacao: number;
};

type itensSala = {
    qtd: number,
    icon: string,
    nomeItem: string
}

const Sala = () => {

    const [corBotao, setarCorBotao] = useState(['#6DCE31', '#FAAF40', '#B54646']);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedSala, setSelectedSala] = useState<Sala | null>(null);
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

    const itensSala: itensSala[] = [
        {
            qtd: 20,
            icon: "",
            nomeItem: "Computadores"
        },
        {
            qtd: 1,
            icon: "",
            nomeItem: "Projetores"
        },
        {
            qtd: 2,
            icon: "",
            nomeItem: "Ar-condicionado"
        },
        {
            qtd: 30,
            icon: "",
            nomeItem: "Capacidade"
        }
    ]

    return (

        <View style={styles.containerAndares}>
            {andaresSalas.map((andarSala, index) => (
                <View style={styles.containerSalas} key={index}>
                    <Text style={styles.nomeAndar}>{andarSala.nomeAndar}</Text>
                    <ScrollView style={styles.scrollSalas}>
                        {andarSala.salas.map((sala, index) => (

                            <TouchableOpacity
                                style={[styles.botaoSala, { backgroundColor: corBotao[sala.situacao] }]}
                                key={index}
                                onPress={() => {
                                    setModalVisible(true)
                                    setSelectedSala(sala);
                                }}>

                                <Text style={styles.nomeSala}>{sala.nomeSala}</Text>
                                <Ionicons
                                    style={styles.infoIcons} name='desktop-outline'
                                />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                </View>
            ))}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View>
                            <Text style={styles.modalNomeSala}>{selectedSala?.nomeSala}</Text>
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
                                {itensSala.map((itemSala, index) => {
                                    return (
                                        <View style={styles.viewItem} key={index}>
                                            <Text style={styles.qtdItens}>{itemSala.qtd}</Text>
                                            <Ionicons
                                                style={styles.iconItem} name='desktop-outline'
                                            />
                                            <Text style={styles.nomeItem}>{itemSala.nomeItem}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Fechar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default Sala;