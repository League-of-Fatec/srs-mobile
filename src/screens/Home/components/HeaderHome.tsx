import React from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import styles from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';


const HeaderHome = ({ navigation }: { navigation: NavigationProp<any> }) => {
    return (
        <View style={styles.headerHome}>
            <View style={{ flex: 1 }}>
                <Image source={require("@/assets/images/home/icon-prof.png")} style={styles.image}></Image>
            </View>
            <View style={[{ flex: 3 }, styles.infoProf]}>
                <Text>Boa noite,</Text>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 20
                }}>Graves Emanuel</Text>
                <Text>Matricula 287451 - 5° DSM</Text>
            </View>
            <View style={{ flex: 0.3 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Configuracoes")}>
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