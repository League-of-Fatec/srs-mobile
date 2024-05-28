import Home from '@/professor/screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import Configuracoes from '@/screens/Configuracoes';

//import Configuracoes from '../screens/Configuracoes/index';

const Stack = createStackNavigator();


export default function HomeStackNavigator() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="HomeStack" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="ConfiguracoesProfessor" component={Configuracoes} options={{ headerShown: false }} />
        </Stack.Navigator>

    );
} 