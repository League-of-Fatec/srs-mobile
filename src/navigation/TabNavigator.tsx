import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';
import Home from '../screens/Home/index';
import Calendario from '../screens/Calendario/index';
import Mapa from '../screens/Mapa/index';
import Salas from '../screens/Salas/index';
import Notificacoes from '../screens/Notificacoes/index';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStackNavigator from './HomeStackNavigator';


const Tab = createBottomTabNavigator();


export default function TabNavigator() {
    return (

        <NavigationContainer>
            <Tab.Navigator
                screenOptions={
                    {
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: '#fff',
                            minHeight: '9%',
                            maxHeight: '9%',
                        },

                        tabBarLabelStyle: {
                            position: 'relative',
                            marginBottom: '17%'
                        }

                    }}>
                <Tab.Screen
                    name="Home"
                    component={HomeStackNavigator}
                    options={{
                        tabBarIcon: ({ color, size }) => <Ionicons
                            name='home-outline'
                            color={color} size={size}
                            style={{ marginTop: '15%' }} />,
                    }}
                />
                <Tab.Screen
                    name="Calendário"
                    component={Calendario}
                    options={{
                        tabBarIcon: ({ color, size }) => <Ionicons
                            name='calendar-outline' color={color} size={size}
                            style={{ marginTop: '15%' }} />
                    }}
                />
                <Tab.Screen
                    name="Mapa"
                    component={Mapa}
                    options={{
                        tabBarIcon: ({ color, size }) => <Ionicons
                            name='map-outline' color={color} size={size}
                            style={{ marginTop: '15%' }} />
                    }}
                />
                <Tab.Screen
                    name="Salas"
                    component={Salas}
                    options={{
                        tabBarIcon: ({ color, size }) => <Ionicons
                            name='list-outline' color={color} size={size}
                            style={{ marginTop: '15%' }} />
                    }}
                />
                <Tab.Screen
                    name="Notificações"
                    component={Notificacoes}
                    options={{
                        tabBarIcon: ({ color, size }) => <Ionicons
                            name='notifications-outline' color={color} size={size}
                            style={{ marginTop: '15%' }} />
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}