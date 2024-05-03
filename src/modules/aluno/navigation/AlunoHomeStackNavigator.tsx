import { NavigationContainer } from '@react-navigation/native';
import Home from '@/aluno/screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import Configuracoes from '../screens/Configuracoes/index';

const Stack = createStackNavigator();


export default function HomeStackNavigator() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="HomeStack" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Configuracoes" component={Configuracoes} options={{ headerShown: false }} />
        </Stack.Navigator>

    );
} 