import React, { useState } from 'react';
import { Image, Switch, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';

type StackTest = {
    Home: undefined
}

export default function Configuracoes({ navigation }: { navigation: NavigationProp<StackTest> }) {

    const [isEnabledModoNoturno, setIsEnabledModoNoturno] = useState(false);
    const [isEnabledNotificacoes, setIsEnabledNotificacoes] = useState(false);
    const [isEnabledAcessoViaDigital, setIsEnabledAcessoViaDigital] = useState(false);

    const toggleSwitchModoNoturno = () => setIsEnabledModoNoturno(previousState => !previousState);
    const toggleSwitchNotificacoes = () => setIsEnabledNotificacoes(previousState => !previousState);
    const toggleSwitchAcessoViaDigital = () => setIsEnabledAcessoViaDigital(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }} style={styles.btnVoltar}>
                    <Ionicons name="arrow-back" size={40} />
                </TouchableOpacity>
                <Text style={styles.headerTitulo}>Configurações</Text>
            </View>
            <View style={styles.containerPrincipal}>

                <View style={styles.containerInfo}>
                    <View>
                        <Image source={require("@/assets/images/icon-prof.png")} style={styles.image}></Image>
                    </View>
                    <View style={styles.infoConta}>
                        <Text style={styles.nomeConta}>Graves Emanuel</Text>
                        <TouchableOpacity>
                            <Text style={styles.editarConta}>Editar Conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerOpcoes}>
                    <View style={styles.itemOpcoes}>
                        <Ionicons
                            style={styles.infoIcons} name='list-outline'
                        />
                        <Text style={styles.infoTitulo}>Modo Noturno</Text>
                        <Switch style={styles.infoSwitch}
                            trackColor={{ false: "#767577", true: "#767577" }}
                            thumbColor={isEnabledModoNoturno ? "#f4f3f4" : "#f4f3f4"}
                            onValueChange={toggleSwitchModoNoturno}
                            value={isEnabledModoNoturno}
                        />
                    </View>
                    <View style={styles.linhaOpcoes} />
                    <View style={styles.itemOpcoes}>
                        <Ionicons
                            style={styles.infoIcons} name='list-outline'
                        />
                        <Text style={styles.infoTitulo}>Notificações</Text>
                        <Switch style={styles.infoSwitch}
                            trackColor={{ false: "#767577", true: "#767577" }}
                            thumbColor={isEnabledNotificacoes ? "#f4f3f4" : "#f4f3f4"}
                            onValueChange={toggleSwitchNotificacoes}
                            value={isEnabledNotificacoes}
                        />
                    </View>
                    <View style={styles.linhaOpcoes} />
                    <View style={styles.itemOpcoes}>
                        <Ionicons
                            style={styles.infoIcons} name='list-outline'
                        />
                        <Text style={styles.infoTitulo}>Acesso Via Digital</Text>
                        <Switch style={styles.infoSwitch}
                            trackColor={{ false: "#767577", true: "#767577" }}
                            thumbColor={isEnabledAcessoViaDigital ? "#f4f3f4" : "#f4f3f4"}
                            onValueChange={toggleSwitchAcessoViaDigital}
                            value={isEnabledAcessoViaDigital}
                        />
                    </View>
                    <View style={styles.linhaOpcoes} />
                    <TouchableOpacity style={styles.itemOpcoes}>
                        <Ionicons
                            style={styles.infoIcons} name='list-outline'
                        />
                        <Text style={styles.infoTitulo}>Calendário</Text>
                        <Ionicons
                            style={styles.infoIcons} name='arrow-forward'
                        />
                    </TouchableOpacity>
                    <View style={styles.linhaOpcoes} />
                    <TouchableOpacity style={styles.itemOpcoes}>
                        <Ionicons
                            style={styles.infoIcons} name='list-outline'
                        />

                        <Text style={styles.infoTitulo}>Tela Inicial</Text>
                        <Ionicons
                            style={styles.infoIcons} name='arrow-forward'
                        />
                    </TouchableOpacity>
                    <View style={styles.linhaOpcoes} />
                    <TouchableOpacity style={styles.itemOpcoes}>
                        <Ionicons
                            style={styles.infoIcons} name='list-outline'
                        />
                        <Text style={styles.infoTitulo}>Sair</Text>
                        <Ionicons
                            style={styles.infoIcons} name='arrow-forward'
                        />
                    </TouchableOpacity>
                </View>



            </View>
        </View>
    );
}
