import { useEffect, useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import ReservaStyle from "./alertReservaStyle";
import LoadingReserva from "@/components/shared/LoadingReserva";


type PropsModalReservaRevisar = {
    visibilityModalReservaRevisar: boolean;
    visibilityModalReservaSucesso: boolean;
    setVisibilityModalReservaRevisar: (value: boolean) => void;
    setVisibilityModalReservaSucesso: (value: boolean) => void;
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

export const ModalReservaRevisar = ({ visibilityModalReservaRevisar, setVisibilityModalReservaRevisar, visibilityModalReservaSucesso, setVisibilityModalReservaSucesso, alertModalProfessor, data }: PropsModalReservaRevisar) => {

    const [isLoading, setLoading] = useState(false);
    const [isEditButtonVisible, setVisibilityEditButton] = useState(false);

    const confirmReservation = async () => {

        try {
            setVisibilityEditButton(true);
            setLoading(true);
            await alertModalProfessor();

        } catch (error) {
            console.error(error);
            console.warn("Algo deu errado")
        } finally {
            setLoading(false);
            setVisibilityEditButton(false);
            setVisibilityModalReservaRevisar(false);
            setVisibilityModalReservaSucesso(true)
        }
    }

    const cleanReviewData = () => {
        data = null;
    }

    useEffect(() => {
        if (!visibilityModalReservaRevisar) {
            cleanReviewData();
        }
    }, [visibilityModalReservaRevisar]);

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
                            <TouchableOpacity
                                disabled={isEditButtonVisible}
                                style={[
                                    ReservaStyle.buttonEdit,
                                    { opacity: isEditButtonVisible ? 0.5 : 1 }
                                ]}
                                onPress={() => setVisibilityModalReservaRevisar(false)}
                            >
                                <Text style={ReservaStyle.textButton}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => confirmReservation()} style={ReservaStyle.buttonConfirm}>
                                {!isLoading ? <Text style={ReservaStyle.textButton}>Confirmar</Text> : <LoadingReserva />}

                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        </Modal >
    );
}
