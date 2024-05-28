import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { ProfessorState } from '@/redux/UserSlice';


const HeaderHome = ({ navigation }: { navigation: NavigationProp<any> }) => {

    const { professor, token } = useSelector((state: { professor: ProfessorState }) => state.professor);



    return (
        <View style={styles.headerHome}>
            <View style={{ flex: 1 }}>
                <Image source={require("@/assets/images/home/icon-prof.png")} style={styles.image}></Image>
            </View>
            <View style={[{ flex: 3 }, styles.infoProf]}>
                <Text>Professor,</Text>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 20
                }}>{professor?.user.firstName}</Text>
                <Text>RA: {professor?.teacherId}</Text>
            </View>
            <View style={{ flex: 0.3 }}>
                {/*<TouchableOpacity onPress={() => navigation.navigate("Configuracoes")}>*/}
                <TouchableOpacity onPress={() => navigation.navigate("ConfiguracoesProfessor")}>
                    <View>
                        <Ionicons style={{ marginTop: 10 }}
                            name='settings-outline' size={20} color={"#000000"} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderHome;