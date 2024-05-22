import { useState } from "react";
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReservaStyle from './alertReservaStyle';
import { set } from "date-fns";

type PropsModalReservaCancel = {
    visibilityModalReservaCancel: boolean;
    setVisibilityModalReservaCancel: (value: boolean) => void;
    setModalVisible: (value: boolean) => void;
};


export const ModalReservaCancel = ({ visibilityModalReservaCancel, setVisibilityModalReservaCancel, setModalVisible }: PropsModalReservaCancel) => {

    const editModal = () => {
        setVisibilityModalReservaCancel(false);
    }

    const closeModal = () => {
        setVisibilityModalReservaCancel(false);
        setModalVisible(false);
    }

    return (
        <Modal
            animationType="fade"
            visible={visibilityModalReservaCancel}
            transparent={true}
        >
            <View style={ReservaStyle.modalAlertReserva}>
                <View style={ReservaStyle.alertContainer}>
                    <View style={ReservaStyle.statusReservaContainerFailed}>
                        <Ionicons style={ReservaStyle.icon}
                            name='close' size={30} color={"#000000"} />
                    </View>
                    <View style={ReservaStyle.textReservaContainer}>
                        <Text style={ReservaStyle.textReserva}>Tem certeza que deseja</Text>
                        <Text style={ReservaStyle.textReserva}>retornar? Todas as</Text>
                        <Text style={ReservaStyle.textReserva}>informações inseridas serão</Text>
                        <Text style={ReservaStyle.textReserva}>apagadas</Text>
                    </View>
                    <View style={ReservaStyle.buttonContainerCancel} >
                        <TouchableOpacity onPress={() => editModal()} style={ReservaStyle.buttonEdit}>
                            <Text style={ReservaStyle.textButton}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => closeModal()} style={ReservaStyle.buttonConfirm}>
                            <Text style={ReservaStyle.textButton}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal >
    );
}