
import Home from '@/aluno/screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '@/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import AlunoTabNavigator from '@/aluno/navigation/AlunoTabNavigator'
import ProfessorTabNavigator from '@/professor/navigation/ProfessorTabNavigator';
import { ForgotPassword } from '@/screens/ForgotPassword';

const Stack = createStackNavigator();


export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Group>
                    <Stack.Screen name="LoginInicial" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
                </Stack.Group>
                <Stack.Group>
                    <Stack.Screen name="HomeProfessor" component={ProfessorTabNavigator} options={{ headerShown: false }} />
                    <Stack.Screen name="HomeAluno" component={AlunoTabNavigator} options={{ headerShown: false }} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>

    );
} 