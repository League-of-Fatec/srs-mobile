import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from "react";
import styles from "../styles";
import LoadingForgotPassword from "@/components/shared/LoadingForgotPassword";
import { api_url_local } from "@/utils/API_URLS";
import { Alert } from "react-native";
import { COLORS } from "@/utils/COLORS_APP_LIGHT";


export type ModalForgotPasswordProps = {
    modalVisible: boolean;
    setModalVisibility: (value: boolean) => void
};

export const ModalForgotPassword = ({ modalVisible, setModalVisibility }: ModalForgotPasswordProps) => {

    const [email, setEmail] = useState("");

    const [isLoading, setLoading] = useState(false);

    const handleSubmit = async (email: string) => {

        setLoading(true)
        try {

            const data = {
                email
            }
            const response = await fetch(`${api_url_local}/login/forgotPassword`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const responseJson = await response.json();

            if (!response.ok) {
                Alert.alert("Erro", responseJson.message);
                return;
            }

            Alert.alert("Sucesso", "Link de recuperação de senha enviado, cheque sua caixa de entrada ou spam!")
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
            <View style={styles.modalForgotPassword}>
                <TouchableOpacity onPress={() => setModalVisibility(false)}>
                    <Ionicons style={styles.closeModalIcon}
                        name='close' />
                </TouchableOpacity>

                <View style={styles.viewFormForgotPassword}>
                    <Text style={styles.textForgotPassword}>Recuperação de senha</Text>
                    <View style={styles.inputView}>
                        <TextInput style={styles.TextInput}
                            selectionColor={COLORS.corPrincipal}
                            inputMode='email'
                            placeholder='Digite seu email.'
                            placeholderTextColor={'#003f5c'}
                            onChangeText={(email) => setEmail(email)} />
                    </View>

                    <TouchableOpacity style={styles.forgotPasswordBtn} onPress={() => handleSubmit(email)}>
                        <Text style={styles.textColorBtn}>
                            {!isLoading ? "Enviar solicitação" : <LoadingForgotPassword />}
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal >
    );
}

