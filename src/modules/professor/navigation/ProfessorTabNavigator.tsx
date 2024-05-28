import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfessorHomeStackNavigator from '@/professor/navigation/ProfessorHomeStackNavigator';
import Calendario from '../screens/Calendario';
import Salas from '../screens/Salas';
import Notificacoes from '../screens/Notificacoes';
import Mapa from '@/screens/Mapa';


const Tab = createBottomTabNavigator();


export default function ProfessorTabNavigator() {
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
                tabBarInactiveTintColor: '#000000',
                tabBarActiveTintColor: '#6D1C1C',

            }
        }>
            <Tab.Screen
                name="Home"
                component={ProfessorHomeStackNavigator}
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