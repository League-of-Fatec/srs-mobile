import React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import styles from '../styles';
import { useAnimatedRef } from 'react-native-reanimated';

type proxAulas = {
    nomeEvento: string,
    nomeProfessor: string,
    curso: string,
    horario: string
}

const ProximasAulas = () => {

    const proximasAulas: proxAulas[] = [
        {
            nomeEvento: "Laboratório A",
            nomeProfessor: "Professor tergolina",
            curso: "Banco de dados relacional",
            horario: "12:00 - 13:00"
        },
        {
            nomeEvento: "Laboratório B",
            nomeProfessor: "Professor Frietz",
            curso: "Desenvolvimento Mobile",
            horario: "19:00 - 20:40"
        },
        {
            nomeEvento: "Laboratório C",
            nomeProfessor: "Professor Stephania",
            curso: "Design Digital",
            horario: "20:40 - 22:40"
        },
        {
            nomeEvento: "Laboratório D",
            nomeProfessor: "Professor Eduardo",
            curso: "Álgebra Linear",
            horario: "09:00 - 10:40"
        },
    ]

    const animatedRef = useAnimatedRef<ScrollView>();

    return (
        <View style={styles.containerProximasAulas}>
            <Text style={styles.title2}>Próximas Aulas</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                ref={animatedRef}
                contentContainerStyle={{ paddingHorizontal: 10 }}
            >
                {proximasAulas.map((proxAula, index) => {
                    return (
                        <TouchableOpacity style={styles.itemAula} key={index}>
                            <View style={styles.viewEvento}>
                                <Text style={styles.titleEvento}>{proxAula.nomeEvento}</Text>
                                <Text style={styles.descEvento}>{proxAula.nomeProfessor}</Text>
                                <Text style={styles.descEvento}>{proxAula.curso}</Text>
                                <Text style={styles.descEvento}>{proxAula.horario}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default ProximasAulas;