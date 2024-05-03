import React from 'react';
import { Text, View, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import styles from './styles';
import Header from '@/components/shared/HeaderEstatico';

const notificacoes = [
    {
        data: "Hoje",
        nome: "Fiora - Solicitou o uso de sala",
        sala: "Sala 37",
        andarHorario: "3 Andar - 17:00"
    },
    {
        data: "Ontem",
        nome: "Marcelo - Cancelou uma reserva",
        sala: "Sala 13",
        andarHorario: "1 Andar - 17:00"
    },
    {
        data: "Semana Passada",
        nome: "Michelly - Solicitou o uso de sala",
        sala: "Sala 22",
        andarHorario: "2 Andar - 17:00"
    },
    {
        data: "1 de Abril de 2023",
        nome: "Caio - Solicitou o uso de sala",
        sala: "Sala 44",
        andarHorario: "4 Andar - 17:00"
    },
]

const imagensProf = [
    require("@/assets/images/notificacoes/prof1.png"),
    require("@/assets/images/notificacoes/prof2.png"),
    require("@/assets/images/notificacoes/prof3.png"),
    require("@/assets/images/notificacoes/prof4.png")
]

export default function Notificacoes() {
    return (
        <View style={styles.container}>
            <Header title='Notificações' />
            <ScrollView>
                {notificacoes.map((notificacao, index) => (

                    <TouchableOpacity style={styles.containerNotificacoes} key={index}>
                        <Text style={styles.textoData}>{notificacao.data}</Text>
                        <View style={styles.infoNotificacao}>
                            <Image source={imagensProf[index]} style={styles.imgProf}></Image>
                            <View>
                                <Text style={styles.text}>{notificacao.nome}</Text>
                                <Text style={[{ fontWeight: 'bold' }, styles.text]}>Sala 37</Text>
                                <Text style={styles.text}>{notificacao.andarHorario}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

