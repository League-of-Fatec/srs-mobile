import React from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { List } from 'react-native-paper';
import Animated, { useAnimatedRef, useScrollViewOffset } from 'react-native-reanimated';


export default function Home() {

    const { width } = Dimensions.get('window');
    const animatedRef = useAnimatedRef<Animated.ScrollView>();
    const scrollOffset = useScrollViewOffset(animatedRef);

    return (
        <Animated.View style={styles.container}>
            <StatusBar style="light" hidden={true} />
            <Animated.View style={styles.navbar}>
                <Animated.View style={{ flex: 1 }}>
                    <Image source={require("@/assets/images/icon-prof.png")} style={styles.image}></Image>
                </Animated.View>
                <Animated.View style={[{ flex: 3 }, styles.infoProf]}>
                    <Text>Boa noite,</Text>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 20
                    }}>Graves Emanuel</Text>
                    <Text>Matricula 287451 - 5° DSM</Text>
                </Animated.View>
                <Animated.View style={{ flex: 0.3 }}>
                    <TouchableOpacity>
                        <Animated.View>
                            <Ionicons style={{ marginTop: 10 }}
                                name='settings-outline' size={20} color={"#000000"} />
                        </Animated.View>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
            <Animated.View style={styles.containerPrincipal}>
                <Animated.View style={styles.containerProximosEventos}>
                    <Text style={styles.title2}>Próximos Eventos</Text>
                    <Animated.View style={{ flex: 1, width: "100%", alignSelf: "flex-start" }}>
                        <Animated.ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            ref={animatedRef}
                        >
                            <TouchableOpacity style={styles.itemEvento}>
                                <Animated.View style={{ padding: 10 }}>
                                    <Text style={styles.titleEvento}>Evento 1</Text>
                                    <Text style={styles.descEvento}>Descrição do evento 1</Text>
                                </Animated.View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.itemEvento}>
                                <Animated.View style={{ padding: 10 }}>
                                    <Text style={styles.titleEvento}>Evento 2</Text>
                                    <Text style={styles.descEvento}>Descrição do evento 2</Text>
                                </Animated.View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.itemEvento}>
                                <Animated.View style={{ padding: 10 }}>
                                    <Text style={styles.titleEvento}>Evento 3</Text>
                                    <Text style={styles.descEvento}>Descrição do evento 3</Text>
                                </Animated.View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.itemEvento}>
                                <Animated.View style={{ padding: 10 }}>
                                    <Text style={styles.titleEvento}>Evento 4</Text>
                                    <Text style={styles.descEvento}>Descrição do evento 4</Text>
                                </Animated.View>
                            </TouchableOpacity>

                        </Animated.ScrollView>

                    </Animated.View>
                </Animated.View>
                <Animated.View style={styles.containerSalasFavoritas}>
                    <Text style={styles.title2}>Salas Favoritas</Text>
                    <Animated.ScrollView>

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
                    </Animated.ScrollView>
                </Animated.View>
            </Animated.View>


        </Animated.View >
    );
}
