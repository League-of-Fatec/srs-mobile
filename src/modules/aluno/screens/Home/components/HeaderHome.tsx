import React from 'react';
import { Image, Text, TouchableOpacity, View, } from 'react-native';
import styles from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { StudentState } from '@/redux/UserSlice';

const HeaderHome = ({ navigation }: { navigation: NavigationProp<any> }) => {

    const { student, token } = useSelector((state: { student: StudentState }) => state.student);
    const aluno =
    {
        nome: "Graves Emanuel",
        matricula: "Matricula 287451 - 5° DSM",
        icon: ""
    }



    return (
        <View style={styles.headerHome}>
            <View style={{ flex: 1 }}>
                <View style={styles.logo}>
                    <Image source={require("@/assets/images/home/logo_fatec_osasco.png")} style={styles.image}></Image>
                </View>
                <View style={styles.infoProf}>
                    <Text style={styles.textHomeSaudacao}>Olá, </Text>
                    <Text style={styles.textHome}>{student?.user.firstName}</Text>
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