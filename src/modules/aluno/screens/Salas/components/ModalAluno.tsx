import React from 'react';
import { Text, View, Modal, Pressable, ScrollView } from 'react-native';
import styles from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ClassRoom } from '../types/SalaTypes';
import { developing } from '@/utils/developing';
import { TouchableOpacity } from 'react-native';

type ModalAlunoProps = {
    modalVisible: boolean;
    setModalVisible: (value: boolean) => void;
    selectedClassRoom: ClassRoom | null;
    setSelectedClassRoom: (value: ClassRoom | null) => void;
};

const weekDays = [
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sab"
];

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