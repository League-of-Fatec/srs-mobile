import React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import styles from '../styles';
import { useAnimatedRef } from 'react-native-reanimated';

const ProximasAulas = () => {
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
                <TouchableOpacity style={styles.itemAula}>
                    <View style={styles.viewEvento}>
                        <Text style={styles.titleEvento}>Evento 1</Text>
                        <Text style={styles.descEvento}>Descrição do evento 1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemAula}>
                    <View style={{}}>
                        <Text style={styles.titleEvento}>Evento 2</Text>
                        <Text style={styles.descEvento}>Descrição do evento 2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemAula}>
                    <View style={{}}>
                        <Text style={styles.titleEvento}>Evento 3</Text>
                        <Text style={styles.descEvento}>Descrição do evento 3</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemAula}>
                    <View style={{}}>
                        <Text style={styles.titleEvento}>Evento 4</Text>
                        <Text style={styles.descEvento}>Descrição do evento 4</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

export default ProximasAulas;