import React from 'react';
import { View, } from 'react-native';
import styles from './styles';
import { NavigationProp } from '@react-navigation/native';
import HeaderHome from './components/HeaderHome';
import ProximasAulas from './components/ProximasAulas';
import InfoAluno from "./components/InfoAluno";

export default function Home({ navigation }: { navigation: NavigationProp<any> }) {

    return (
        <View style={styles.container}>
            <HeaderHome navigation={navigation} />
            <View style={styles.containerPrincipal}>
                <InfoAluno />
                <ProximasAulas navigation={navigation} />
            </View>
        </View >
    );
}
