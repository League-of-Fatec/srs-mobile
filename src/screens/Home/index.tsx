import React from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { List } from 'react-native-paper';

import { NavigationProp } from '@react-navigation/native';
import HeaderHome from './components/HeaderHome';
import ProximasAulas from './components/ProximasAulas';
import SalasFavoritas from './components/SalasFavoritas';


export default function Home({ navigation }: { navigation: NavigationProp<any> }) {

    return (
        <View style={styles.container}>
            <HeaderHome navigation={navigation} />
            <View style={styles.containerPrincipal}>
                <ProximasAulas />
                <SalasFavoritas />
            </View>
        </View >
    );
}
