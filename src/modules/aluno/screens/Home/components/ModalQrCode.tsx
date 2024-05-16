import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
import Ionicons from 'react-native-vector-icons/Ionicons';

export type ModalQroCodeProps = {
    modalQrCodeVisible: boolean;
    setModalQrCodeVisibility: (value: boolean) => void;
};
const ModalQrCode = ({ modalQrCodeVisible, setModalQrCodeVisibility }: ModalQroCodeProps) => {
    return (
        <Modal visible={modalQrCodeVisible} animationType="slide" transparent={true}>
            <View style={styles.modalCarteirinha}>
                <TouchableOpacity onPress={() => setModalQrCodeVisibility(false)}>
                    <Ionicons style={styles.iconsModalCarteirinha}
                        name='close' />
                </TouchableOpacity>
                <View style={styles.viewCarteirinha}>
                    <View style={styles.cartaoCarteirinha}>
                        <Image source={require("@/assets/images/home/qrcode.png")}></Image>
                    </View>
                </View>
                <View style={styles.footerCarteirinha}>
                    <Text style={styles.textoFooterCarteirinha}>QR Code</Text>
                </View>
            </View>


        </Modal>
    );
}

export default ModalQrCode;