import 'react-native-gesture-handler';
import React from 'react';
import TabNavigator from './src/navigation/TabNavigator';
import Login from '@/screens/Login';

export default function App() {

  const logado = false;

  if (logado) {
    return <TabNavigator />;
  } if (!logado) {
    return Login()
  } else {
    return alert("Erro no login!")
  }

}