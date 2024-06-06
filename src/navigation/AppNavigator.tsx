
import { createStackNavigator } from '@react-navigation/stack';
import Login from '@/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import AlunoTabNavigator from '@/aluno/navigation/AlunoTabNavigator'
import ProfessorTabNavigator from '@/professor/navigation/ProfessorTabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const Stack = createStackNavigator();

export default function AppNavigator() {

    const [initialRoute, setInitialRoute] = useState<string>();

    useEffect(() => {

        const verifyLogin = async () => {
            const token = await AsyncStorage.getItem("token");
            const userType = await AsyncStorage.getItem("userType");

            if (token && userType) {

                if (userType === "PROFESSOR") {
                    setInitialRoute("HomeProfessor");
                }

                if (userType === "ALUNO") {
                    setInitialRoute("HomeAluno");
                }


            } else {
                setInitialRoute("LoginInicial");
            }
        }

        verifyLogin();

    }, []);


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRoute}>
                <Stack.Group>
                    <Stack.Screen name="LoginInicial" component={Login} options={{ headerShown: false }} />
                </Stack.Group>
                <Stack.Group>
                    <Stack.Screen name="HomeProfessor" component={ProfessorTabNavigator} options={{ headerShown: false }} />
                    <Stack.Screen name="HomeAluno" component={AlunoTabNavigator} options={{ headerShown: false }} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>

    );
} 