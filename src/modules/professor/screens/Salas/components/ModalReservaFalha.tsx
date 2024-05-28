import { Modal, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReservaStyle from './alertReservaStyle';

type PropsModalReservaFalha = {
    visibilityModalReservaFalha: boolean;
    setVisibilityModalReservaFalha: (value: boolean) => void;
};


export const ModalReservaFalha = ({ visibilityModalReservaFalha, setVisibilityModalReservaFalha }: PropsModalReservaFalha) => {

    return (
        <Modal
            animationType="fade"
            visible={visibilityModalReservaFalha}
            transparent={true}
        >
            <View style={ReservaStyle.modalAlertReserva}>
                <View style={ReservaStyle.alertContainer}>
                    <View style={ReservaStyle.statusReservaContainerFailed}>
                        <Ionicons style={ReservaStyle.icon}
                            name='close' size={30} color={"#000000"} />
                    </View>
                    <View style={ReservaStyle.textReservaContainer}>
                        <Text style={ReservaStyle.textReserva}>Ocorreu um erro, tente</Text>
                        <Text style={ReservaStyle.textReserva}>novamente.</Text>
                    </View>
                    <View style={ReservaStyle.buttonContainer} >
                        <TouchableOpacity onPress={() => setVisibilityModalReservaFalha(false)} style={ReservaStyle.button}>
                            <Text style={ReservaStyle.textButton}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal >
    );
}