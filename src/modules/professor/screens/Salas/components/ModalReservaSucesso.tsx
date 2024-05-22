import { useState } from "react";
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReservaStyle from './alertReservaStyle';

type PropsModalReservaSucesso = {
    visibilityModalReservaSucesso: boolean;
    setVisibilityModalReservaSucesso: (value: boolean) => void;
};

export const ModalReservaSucesso = ({ visibilityModalReservaSucesso, setVisibilityModalReservaSucesso }: PropsModalReservaSucesso) => {

    return (
        <Modal
            animationType="fade"
            visible={visibilityModalReservaSucesso}
            transparent={true}
        >
            <View style={ReservaStyle.modalAlertReserva}>
                <View style={ReservaStyle.alertContainer}>
                    <View style={ReservaStyle.statusReservaContainerSuccess}>
                        <Ionicons style={ReservaStyle.icon}
                            name='checkmark' size={30} color={"#000000"} />
                    </View>
                    <View style={ReservaStyle.textReservaContainer}>
                        <Text style={ReservaStyle.textReserva}>Reserva Realizada com</Text>
                        <Text style={ReservaStyle.textReserva}>Sucesso!</Text>
                    </View>
                    <View style={ReservaStyle.buttonContainer} >
                        <TouchableOpacity onPress={() => setVisibilityModalReservaSucesso(false)} style={ReservaStyle.button}>
                            <Text style={ReservaStyle.textButton}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal >
    );
}