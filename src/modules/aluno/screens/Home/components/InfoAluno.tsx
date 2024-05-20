import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalCarteirinha from './ModalCarteirinha';
import ModalQrCode from './ModalQrCode';
import { useSelector } from 'react-redux';
import { UserState } from '@/redux/UserSlice';

const InfoAluno = () => {

    const [modalCarteirinhaVisible, setModalCarteirinhaVisibility] = useState(false);
    const [modalQrCodeVisible, setModalQrCodeVisibility] = useState(false);

    const { user, token } = useSelector((state: { user: UserState }) => state.user);

    return (
        <View style={styles.containerInfoAluno}>
            <View style={styles.carteirinha}>
                <View style={styles.topCarteirinha}>
                    <View style={styles.fotoEstudanteView}>
                        <View style={styles.fotoEstudante}>

                        </View>
                    </View>
                    <View style={styles.infoAlunoView}>
                        <View style={styles.infoAluno}>
                            <Text style={styles.nomeAluno}>{user?.firstName} {user?.lastName}</Text>
                            <View style={styles.descAlunoView}>
                                <Text style={styles.descAluno}>Curso: </Text>
                                <Text style={styles.descAluno}>{user?.userStudent?.course}</Text>
                            </View>
                            <View style={styles.descAlunoView}>
                                <Text style={styles.descAluno}>Período: </Text>
                                <Text style={styles.descAluno}>{user?.userStudent?.period}</Text>
                            </View>
                            <View style={styles.descAlunoView}>
                                <Text style={styles.descAluno}>RA: </Text>
                                <Text style={styles.descAluno}>{user?.userStudent?.studentId}</Text>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={styles.bottomCarteirinha}>
                    <TouchableOpacity style={styles.carteirinhaDigital} onPress={() => setModalCarteirinhaVisibility(true)}>
                        <Ionicons style={styles.iconsCarteirinhaBottom}
                            name='card' color={"#000000"} />
                        <Text style={styles.textoBottomCarteirinha}>Carteirinha Digital</Text>
                    </TouchableOpacity>
                    <ModalCarteirinha
                        modalCarteirinhaVisible={modalCarteirinhaVisible}
                        setModalCarteirinhaVisibility={setModalCarteirinhaVisibility}
                    />
                    <TouchableOpacity style={styles.qrCode} onPress={() => setModalQrCodeVisibility(true)}>
                        <Ionicons style={styles.iconsCarteirinhaBottom}
                            name='qr-code' color={"#000000"} />
                        <Text style={styles.textoBottomCarteirinha}>Gerar QR Code</Text>
                    </TouchableOpacity>
                    <ModalQrCode
                        modalQrCodeVisible={modalQrCodeVisible}
                        setModalQrCodeVisibility={setModalQrCodeVisibility}
                    />
                </View>
            </View>
        </View>
    )
}

export default InfoAluno;