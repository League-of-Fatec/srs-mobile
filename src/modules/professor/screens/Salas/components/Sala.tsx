import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Modal, Alert, Pressable } from 'react-native';
import { List } from 'react-native-paper';
import styles from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalProfessor from './ModalProfessor';
import { api_url_local } from '@/utils/API_URLS';
import Loading from '@/components/shared/Loading';
import { ClassRoom, ResponseTypeClassRooms } from '../types/SalaTypes';
import Accordion from '@/components/shared/Accordion';





const Sala = () => {

    const [colorButton, setColorButton] = useState(['#6DCE31', '#FAAF40', '#B54646']);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectClassRoom, setSelectClassRoom] = useState<ClassRoom | null>(null);
    const [floors, setFloors] = useState<string[]>();
    const [response, setResponse] = useState<ResponseTypeClassRooms>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${api_url_local}/classrooms`, {
                    method: "GET",
                });
                const responseJson: ResponseTypeClassRooms = await response.json();
                const floors = (Object.keys(responseJson));
                setFloors(floors);
                setResponse(responseJson);
                setIsLoading(false)

            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    if (isLoading) {
        return <Loading />
    }

    const numAleat = () => {
        const numAleat = Math.floor(Math.random() * 3)
        return numAleat;
    }

    return (
        <View style={styles.containerAndares}>
            <ScrollView>
                {floors?.map((floor, index) => (
                    <View style={styles.containerSalas} key={index}>
                        <Accordion title={`${floor}° Andar`}>
                            <ScrollView style={styles.scrollSalas}>
                                {response && response[floor].map((classroom, index) => (

                                    <TouchableOpacity
                                        style={[styles.botaoSala, { backgroundColor: colorButton[numAleat()] }]}
                                        key={index}
                                        onPress={() => {
                                            setModalVisible(true)
                                            setSelectClassRoom(classroom);
                                        }}>

                                        <Text style={styles.nomeSala}>{classroom.name}</Text>
                                        <Ionicons
                                            style={styles.infoIcons} name='desktop-outline'
                                        />
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </Accordion>

                    </View>
                ))}
                <ModalProfessor
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    selectedClassRoom={selectClassRoom}
                    setSelectedClassRoom={setSelectClassRoom}
                />
            </ScrollView>
        </View>
    );
}

export default Sala;