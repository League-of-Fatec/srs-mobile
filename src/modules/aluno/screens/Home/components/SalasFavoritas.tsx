import React from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import styles from '../styles';
import { List } from 'react-native-paper';

const SalasFavoritas = () => {
    return (
        <View style={styles.containerSalasFavoritas}>
            <Text style={styles.title2}>Salas Favoritas</Text>
            <ScrollView>
                <List.AccordionGroup>
                    <List.Accordion title="Sala 1" id="1" style={styles.itemLista}>
                        <List.Item title="25 cadeiras" />
                        <List.Item title="25 mesas" />
                        <List.Item title="1 Computador" />
                    </List.Accordion>
                    <List.Accordion title="Sala 2" id="2" style={styles.itemLista}>
                        <List.Item title="25 cadeiras" />
                        <List.Item title="25 mesas" />
                        <List.Item title="1 Computador" />
                    </List.Accordion>
                    <List.Accordion title="Sala 3" id="3" style={styles.itemLista}>
                        <List.Item title="25 cadeiras" />
                        <List.Item title="25 mesas" />
                        <List.Item title="1 Computador" />
                    </List.Accordion>
                    <List.Accordion title="Sala 4" id="4" style={styles.itemLista}>
                        <List.Item title="25 cadeiras" />
                        <List.Item title="25 mesas" />
                        <List.Item title="1 Computador" />
                    </List.Accordion>
                    <List.Accordion title="Sala 5" id="5" style={styles.itemLista}>
                        <List.Item title="25 cadeiras" />
                        <List.Item title="25 mesas" />
                        <List.Item title="1 Computador" />
                    </List.Accordion>
                    <List.Accordion title="Sala 6" id="6" style={styles.itemLista}>
                        <List.Item title="25 cadeiras" />
                        <List.Item title="25 mesas" />
                        <List.Item title="1 Computador" />
                    </List.Accordion>
                </List.AccordionGroup>
            </ScrollView>
        </View>
    )
}

export default SalasFavoritas;