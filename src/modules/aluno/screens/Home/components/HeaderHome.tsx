import React from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import styles from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { UserState } from '@/redux/UserSlice';
import FatecSvg from '@/assets/svg/FatecSvg';



const HeaderHome = ({ navigation }: { navigation: NavigationProp<any> }) => {

    const { user, token } = useSelector((state: { user: UserState }) => state.user);

    if (user !== undefined) {
        if (user?.firstName !== undefined) {
            console.warn("O usuário: ", user?.firstName, "está logado!");
            console.log("O usuário: ", user?.firstName, "está logado!");
        }
    }
    const aluno =
    {
        nome: "Graves Emanuel",
        matricula: "Matricula 287451 - 5° DSM",
        icon: ""
    }

    const formattedName = aluno.nome.split(" ")[0];


    return (
        <View style={styles.headerHome}>
            <View style={{ flex: 1 }}>
                <View style={styles.logo}>
                    <Image source={require("@/assets/images/home/logo_fatec_osasco.png")} style={styles.image}></Image>
                </View>
                <View style={styles.infoProf}>
                    <Text style={styles.textHomeSaudacao}>Olá, </Text>
                    <Text style={styles.textHome}>{formattedName}</Text>
                </View>
            </View>

            <View style={styles.config}>
                <TouchableOpacity onPress={() => navigation.navigate("Configuracoes")}>
                    <View>
                        <Ionicons style={{ paddingTop: 10 }}
                            name='settings-outline' size={30} color={"#000000"} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderHome;