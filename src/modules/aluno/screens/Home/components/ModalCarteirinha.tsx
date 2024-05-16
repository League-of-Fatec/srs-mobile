import { useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "../styles";

export type ModalCarteirinhaProps = {
    modalCarteirinhaVisible: boolean;
    setModalCarteirinhaVisibility: (value: boolean) => void;
};

const ModalCarteirinha = ({ modalCarteirinhaVisible, setModalCarteirinhaVisibility }: ModalCarteirinhaProps) => {


    return (
        <Modal visible={modalCarteirinhaVisible} animationType="slide" transparent={true}>
            <View style={styles.modalCarteirinha}>
                <TouchableOpacity onPress={() => setModalCarteirinhaVisibility(false)}>
                    <Ionicons style={styles.iconsModalCarteirinha}
                        name='close' />
                </TouchableOpacity>
                <View style={styles.viewCarteirinha}>
                    <View style={styles.cartaoCarteirinha}>
                        <Image source={require("@/assets/images/home/carteirinha.png")}></Image>
                    </View>
                </View>
                <View style={styles.footerCarteirinha}>
                    <Text style={styles.textoFooterCarteirinha}>Carteirinha</Text>
                </View>
            </View>


        </Modal>
    );
}

export default ModalCarteirinha;