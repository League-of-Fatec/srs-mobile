import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Modal, Alert, Pressable } from 'react-native';
import styles from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ClassRoom } from '../types/SalaTypes';


type ModalAlunoProps = {
    modalVisible: boolean;
    setModalVisible: (value: boolean) => void;
    selectedClassRoom: ClassRoom | null;
    setSelectedClassRoom: (value: ClassRoom | null) => void;
};


const ModalAluno = ({ modalVisible, setModalVisible, selectedClassRoom, setSelectedClassRoom }: ModalAlunoProps,) => {

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

                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Fechar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default ModalAluno;