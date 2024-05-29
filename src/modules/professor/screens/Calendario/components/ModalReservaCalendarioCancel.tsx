import { Modal, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReservaStyle from "../../Salas/components/alertReservaStyle";
import { useState } from "react";
import { api_url_local } from "@/utils/API_URLS";
import { err } from "react-native-svg";
import LoadingReserva from "@/components/shared/LoadingReserva";
import { ResponseReservationsJson } from "../utils/ResponseReservationsType";


type PropsModalReservaCalendarioCancel = {
    modalVisible: boolean;
    setModalVisibility: (value: boolean) => void;
    setReservationId: (value: number | null) => void;
    reservationId: number | null
    reservations: ResponseReservationsJson;
    setReservations: (value: ResponseReservationsJson) => void
};

export const ModalReservaCalendarioCancel = ({ modalVisible, setModalVisibility, reservationId, setReservationId, reservations, setReservations }: PropsModalReservaCalendarioCancel) => {

    const [isLoading, setLoading] = useState(false);

    const cancelConfirmation = () => {
        setReservationId(null);
        setModalVisibility(false);
    }

    const confirmCancelReservation = async () => {

        setLoading(true);
        try {
            await fetch(`${api_url_local}/reservation/${reservationId}`, {
                method: 'DELETE'
            });

            const updatedReservations = reservations.filter(reservation => reservation.id !== reservationId);
            setReservations(updatedReservations);
            setReservationId(null);
            setModalVisibility(false);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    }

    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
            transparent={true}
        >
            <View style={ReservaStyle.modalAlertReserva}>
                <View style={ReservaStyle.alertContainer}>
                    <View style={ReservaStyle.statusReservaContainerFailed}>
                        <Ionicons style={ReservaStyle.icon}
                            name='close' size={30} color={"#000000"} />
                    </View>
                    <View style={ReservaStyle.textReservaContainer}>
                        <Text style={ReservaStyle.textReservaCancel}>Tem certeza que deseja</Text>
                        <Text style={ReservaStyle.textReservaCancel}>excluir essa reserva?</Text>
                        <Text style={ReservaStyle.textReservaCancel}>Essa ação é irreversível</Text>
                    </View>
                    <View style={ReservaStyle.buttonContainerCancel} >
                        <TouchableOpacity onPress={() => cancelConfirmation()} style={ReservaStyle.buttonEdit}>
                            <Text style={ReservaStyle.textButton}>Voltar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => confirmCancelReservation()} style={ReservaStyle.buttonConfirm}>
                            {!isLoading ? <Text style={ReservaStyle.textButton}>Confirmar</Text> : <LoadingReserva />}

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal >
    );
}