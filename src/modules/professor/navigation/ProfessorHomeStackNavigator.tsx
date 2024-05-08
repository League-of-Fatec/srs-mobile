import { NavigationContainer } from '@react-navigation/native';
import Home from '@/professor/screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import ConfiguracoesProfessor from '../screens/Configuracoes';
//import Configuracoes from '../screens/Configuracoes/index';

const Stack = createStackNavigator();


export default function HomeStackNavigator() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="HomeStack" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="ConfiguracoesProfessor" component={ConfiguracoesProfessor} options={{ headerShown: false }} />
        </Stack.Navigator>

    );
} 