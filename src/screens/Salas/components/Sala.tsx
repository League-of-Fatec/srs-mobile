import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import styles from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BotaoSala from './BotaoSala';

const Sala = () => {

    const [corBotao, setarCorBotao] = useState(['#6DCE31', '#FAAF40', '#B54646']);

    return (
        <View style={styles.containerAndares}>
            <Text style={styles.nomeAndar}>1° Andar</Text>
            <View style={styles.containerSalas}>
                <ScrollView>
                    <TouchableOpacity style={[styles.botaoSala, { backgroundColor: corBotao[0] }]}>
                        <Text style={styles.nomeSala}>Sala 10</Text>
                        <Ionicons
                            style={styles.infoIcons} name='desktop-outline'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.botaoSala, { backgroundColor: corBotao[1] }]}>
                        <Text style={styles.nomeSala}>Sala 11</Text>
                        <Ionicons
                            style={styles.infoIcons} name='desktop-outline'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.botaoSala, { backgroundColor: corBotao[2] }]}>
                        <Text style={styles.nomeSala}>Sala 12</Text>
                        <Ionicons
                            style={styles.infoIcons} name='desktop-outline'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.botaoSala, { backgroundColor: corBotao[0] }]}>
                        <Text style={styles.nomeSala}>Sala 13</Text>
                        <Ionicons
                            style={styles.infoIcons} name='desktop-outline'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.botaoSala, { backgroundColor: corBotao[0] }]}>
                        <Text style={styles.nomeSala}>Sala 8</Text>
                        <Ionicons
                            style={styles.infoIcons} name='desktop-outline'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.botaoSala, { backgroundColor: corBotao[2] }]}>
                        <Text style={styles.nomeSala}>Sala 9</Text>
                        <Ionicons
                            style={styles.infoIcons} name='desktop-outline'
                        />
                    </TouchableOpacity>


                </ScrollView>

            </View>

            <Text style={styles.nomeAndar}>2° Andar</Text>
            <View style={styles.containerSalas}>
                <ScrollView>
                    <TouchableOpacity style={[styles.botaoSala, { backgroundColor: corBotao[0] }]}>
                        <Text style={styles.nomeSala}>Sala 20</Text>
                        <Ionicons
                            style={styles.infoIcons} name='desktop-outline'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.botaoSala, { backgroundColor: corBotao[1] }]}>
                        <Text style={styles.nomeSala}>Sala 21</Text>
                        <Ionicons
                            style={styles.infoIcons} name='desktop-outline'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.botaoSala, { backgroundColor: corBotao[2] }]}>
                        <Text style={styles.nomeSala}>Sala 22</Text>
                        <Ionicons
                            style={styles.infoIcons} name='desktop-outline'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.botaoSala, { backgroundColor: corBotao[0] }]}>
                        <Text style={styles.nomeSala}>Sala 26</Text>
                        <Ionicons
                            style={styles.infoIcons} name='desktop-outline'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.botaoSala, { backgroundColor: corBotao[0] }]}>
                        <Text style={styles.nomeSala}>Sala 27</Text>
                        <Ionicons
                            style={styles.infoIcons} name='desktop-outline'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.botaoSala, { backgroundColor: corBotao[2] }]}>
                        <Text style={styles.nomeSala}>Sala 28</Text>
                        <Ionicons
                            style={styles.infoIcons} name='desktop-outline'
                        />
                    </TouchableOpacity>


                </ScrollView>
            </View>
        </View>
    );
}

export default Sala;