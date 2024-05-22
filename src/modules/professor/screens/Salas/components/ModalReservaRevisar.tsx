import { useState } from "react";
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReservaStyle from './alertReservaStyle';


type PropsModalReservaRevisar = {
    visibilityModalReservaRevisar: boolean;
    setVisibilityModalReservaRevisar: (value: boolean) => void;
    alertModalProfessor: () => void;
};


export const ModalReservaRevisar = ({ visibilityModalReservaRevisar, setVisibilityModalReservaRevisar, alertModalProfessor }: PropsModalReservaRevisar) => {

    const confirmReservation = () => {
        alertModalProfessor();
        setVisibilityModalReservaRevisar(false);
    }

    return (
        <Modal
            animationType="fade"
            visible={visibilityModalReservaRevisar}
            transparent={true}
        >
            <View style={ReservaStyle.modalAlertReserva}>
                <View style={ReservaStyle.alertContainerRevisar}>
                    <View style={ReservaStyle.textReservaContainerRevisar}>
                        <Text style={ReservaStyle.titleRevisar}>Revise suas informações</Text>
                        <View style={ReservaStyle.infoContainer}>
                            <Text style={ReservaStyle.textReserva}>Reserva: </Text>
                            <Text style={ReservaStyle.textReservaBold}>Sala 1</Text>
                        </View>
                        <View style={ReservaStyle.infoContainer}>
                            <Text style={ReservaStyle.textReserva}>Período: </Text>
                            <Text style={ReservaStyle.textReservaBold}>22 de Maio - 29 de Maio</Text>
                        </View>
                        <View style={ReservaStyle.infoContainer}>
                            <Text style={ReservaStyle.textReserva}>Horário: </Text>
                            <Text style={ReservaStyle.textReservaBold}>13:40 - 15:20</Text>
                        </View>
                        <View style={ReservaStyle.infoContainer}>
                            <Text style={ReservaStyle.textReserva}>Curso: </Text>
                            <Text style={ReservaStyle.textReservaBold}>DSM</Text>
                        </View>
                        <View style={ReservaStyle.infoContainer}>
                            <Text style={ReservaStyle.textReserva}>Matéria: </Text>
                            <Text style={ReservaStyle.textReservaBold}>Design Digital</Text>
                        </View>
                        <View style={ReservaStyle.infoContainer}>
                            <Text style={ReservaStyle.textReserva}>Disponível para Troca: </Text>
                            <Text style={ReservaStyle.textReservaBold}>Sim</Text>
                        </View>
                    </View>

                    <View style={ReservaStyle.descricaoContainer}>
                        <ScrollView>
                            <Text style={ReservaStyle.textReservaDescricaoTitle}>Descrição: </Text>
                            <Text style={ReservaStyle.textReservaDescricao}>Usaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no MinecraftUsaremos para cancelar o Felipe Neto usando modo Criativo no Minecraft.</Text>
                        </ScrollView>
                    </View>

                    <View style={ReservaStyle.textReservaRevisar}>
                        <Text style={ReservaStyle.textReserva}>As informações acima </Text>
                        <Text style={ReservaStyle.textReserva}>conferem?</Text>
                    </View>



                    <View style={ReservaStyle.buttonContainerCancel} >
                        <TouchableOpacity onPress={() => setVisibilityModalReservaRevisar(false)} style={ReservaStyle.buttonEdit}>
                            <Text style={ReservaStyle.textButton}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => confirmReservation()} style={ReservaStyle.buttonConfirm}>
                            <Text style={ReservaStyle.textButton}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal >
    );
}
