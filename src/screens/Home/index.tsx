import React from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { List } from 'react-native-paper';


export default function Home() {

    return (
        <View style={styles.container}>
            <StatusBar style="light" hidden={true} />
            <View style={styles.navbar}>
                <View style={{ flex: 1 }}>
                    <Image source={require("@/assets/images/icon-prof.png")} style={styles.image}></Image>
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
                    <TouchableOpacity>
                        <View>
                            <Ionicons style={{ marginTop: 10 }}
                                name='settings-outline' size={20} color={"#000000"} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerPrincipal}>
                <View style={styles.containerProximosEventos}>
                    <Text style={styles.title2}>Próximos Eventos</Text>
                    <View style={{ flex: 1, width: "100%", alignSelf: "flex-start" }}>
                 
                      
                    </View>
                </View>
                <View style={styles.containerSalasFavoritas}>
                    <Text style={styles.title2}>Salas Favoritas</Text>
                    <ScrollView>

                        {/*<FlashList
                        data={DATA}
                        renderItem={({ item }) => <Text>{item.title}</Text>}
                        estimatedItemSize={DATA.length}
                    />*/}
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
            </View>


        </View >
    );
}
