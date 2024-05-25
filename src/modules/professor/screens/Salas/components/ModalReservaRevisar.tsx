import { useEffect, useState } from "react";
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import ReservaStyle from "./alertReservaStyle";


type PropsModalReservaRevisar = {
    visibilityModalReservaRevisar: boolean;
    setVisibilityModalReservaRevisar: (value: boolean) => void;
    alertModalProfessor: () => void;
    data: ReviewCurrentData | null;
};

export type ReviewCurrentData = {
    classroomName: string | undefined,
    dates: string[] | [],
    beginTime: string | null,
    endTime: string | null,
    courseName: string | null,
    subjectName: string | null,
    disponibilidade: string | null,
    reason: string | null,
}

export const ModalReservaRevisar = ({ visibilityModalReservaRevisar, setVisibilityModalReservaRevisar, alertModalProfessor, data }: PropsModalReservaRevisar) => {

    const confirmReservation = () => {
        alertModalProfessor();
        setVisibilityModalReservaRevisar(false);
    }

    useEffect(() => {
        console.log(data);
    }, [data]);

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

                        <View style={ReservaStyle.viewInfo}>
                            <View style={ReservaStyle.infoContainerTitle}>
                                <Text style={ReservaStyle.textReserva}>Reserva: </Text>
                            </View>
                            <View style={ReservaStyle.infoContainer}>
                                <Text style={ReservaStyle.textReservaBold}>{data?.classroomName}</Text>
                            </View>
                        </View>

                        <View style={ReservaStyle.viewInfo}>
                            <View style={ReservaStyle.infoContainerTitle}>
                                <Text style={ReservaStyle.textReserva}>Período: </Text>
                            </View>
                            <View style={ReservaStyle.infoContainer}>
                                {data?.dates.map((date, index) => {
                                    return <Text style={ReservaStyle.textReservaBold} key={index}>{date}</Text>
                                })}
                            </View>
                        </View>
                        <View style={ReservaStyle.viewInfo}>
                            <View style={ReservaStyle.infoContainerTitle}>
                                <Text style={ReservaStyle.textReserva}>Horário: </Text>
                            </View>
                            <View style={ReservaStyle.infoContainer}>
                                <Text style={ReservaStyle.textReservaBold}>{data?.beginTime} - {data?.endTime}</Text>
                            </View>
                        </View>
                        <View style={ReservaStyle.viewInfo}>
                            <View style={ReservaStyle.infoContainerTitle}>
                                <Text style={ReservaStyle.textReserva}>Curso: </Text>
                            </View>
                            <View style={ReservaStyle.infoContainer}>
                                <Text style={ReservaStyle.textReservaBold}>{data?.courseName}</Text>
                            </View>
                        </View>
                        <View style={ReservaStyle.viewInfo}>
                            <View style={ReservaStyle.infoContainerTitle}>
                                <Text style={ReservaStyle.textReserva}>Matéria: </Text>
                            </View>
                            <View style={ReservaStyle.infoContainer}>
                                <Text style={ReservaStyle.textReservaBold}>{data?.subjectName}</Text>
                            </View>
                        </View>
                        <View style={ReservaStyle.viewInfo}>
                            <View style={ReservaStyle.infoContainerTitle}>
                                <Text style={ReservaStyle.textReserva}>Disponível para Troca: </Text>
                            </View>
                            <View style={ReservaStyle.infoContainer}>
                                <Text style={ReservaStyle.textReservaBold}>{data?.disponibilidade}</Text>
                            </View>
                        </View>
                        <View style={ReservaStyle.descricaoContainer}>
                            <ScrollView>
                                <Text style={ReservaStyle.textReservaDescricaoTitle}>Descrição: </Text>
                                <Text style={ReservaStyle.textReservaDescricao}>{data?.reason}</Text>
                            </ScrollView>
                        </View>

                        <View style={ReservaStyle.textReservaRevisar}>
                            <Text style={ReservaStyle.textReserva}>As informações acima conferem?</Text>

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
            </View>
        </Modal >
    );
}
