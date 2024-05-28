import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Calendario from '../screens/Calendario/index';
import Salas from '../screens/Salas/index';
import Notificacoes from '../screens/Notificacoes/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStackNavigator from './AlunoHomeStackNavigator';
import Mapa from '@/screens/Mapa';
import { COLORS } from '@/utils/COLORS_APP_LIGHT';


const Tab = createBottomTabNavigator();


export default function AlunoTabNavigator() {
    return (
        <Tab.Navigator screenOptions={
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
                },
                tabBarInactiveTintColor: COLORS.tabBar.corSecundaria,
                tabBarActiveTintColor: COLORS.tabBar.corPrincipal,

            }
        }>
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

    );
}