
import Home from '@/screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '@/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();


export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="LoginInicial" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="HomeContext" component={TabNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
} 