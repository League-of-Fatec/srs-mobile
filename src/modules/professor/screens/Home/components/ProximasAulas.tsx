import React from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from '../styles';
import { useAnimatedRef } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';

type proxAulas = {
    nomeSala: string,
    andar: string,
    nomeProfessor: string,
    curso: string,
    horario: string
}

const ProximasAulas = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const animatedRef = useAnimatedRef<ScrollView>();


    const proximasAulas: proxAulas[] = [
        {
            nomeSala: "Laboratório A",
            andar: "1° Andar",
            nomeProfessor: "Professor tergolina Da silva cruz",
            curso: "Banco de dados relacional",
            horario: "12:00 -> 13:00"
        },
        {
            nomeSala: "Laboratório B",
            andar: "1° Andar",
            nomeProfessor: "Professor Frietz",
            curso: "Desenvolvimento Mobile",
            horario: "19:00 -> 20:40"
        },
        {
            nomeSala: "Laboratório C",
            andar: "1° Andar",
            nomeProfessor: "Professor Stephania",
            curso: "Design Digital",
            horario: "20:40 -> 22:40"
        },
        {
            nomeSala: "Laboratório D",
            andar: "1° Andar",
            nomeProfessor: "Professor Eduardo",
            curso: "Álgebra Linear",
            horario: "09:00 -> 10:40"
        },
    ]

    return (
        <View style={styles.containerProximasAulas}>
            <Text style={styles.titleProximasAulas}>Próximas Aulas</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                ref={animatedRef}
                contentContainerStyle={{ paddingLeft: 10 }}
            >
                {proximasAulas.map((proxAula, index) => {
                    return (
                        <TouchableOpacity style={styles.itemAula} key={index}>
                            <View style={styles.cardAula}>
                                <Ionicons style={styles.iconProf}
                                    name='person' />
                                <View style={styles.cardDescAula}>
                                    <Text style={styles.nomeProfessor}>{proxAula.nomeProfessor}</Text>
                                    <Text style={styles.descAula}>{proxAula.curso}</Text>
                                </View>
                            </View>
                            <View style={styles.cardDescSala}>
                                <Text style={styles.titleAula}>{proxAula.nomeSala}</Text>
                                <Text style={styles.descSala}>{proxAula.horario}</Text>
                            </View>


                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
            <View style={{ width: '100%' }}>
                <TouchableOpacity style={styles.botaoVerMais} onPress={() => navigation.navigate("Calendário")}>
                    <Text style={styles.textoBotaoVerMais}>Ver mais</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProximasAulas;