import 'react-native-gesture-handler';
import React from 'react';
import TabNavigator from './src/modules/aluno/navigation/AlunoTabNavigator';
import Login from '@/screens/Login/index'
import AppNavigator from '@/navigation/AppNavigator';

export default function App() {

  // const logado = true;

  // if (logado) {
  //   return <TabNavigator />;
  // } if (!logado) {
  //   return Login()
  // } else {
  //   return alert("Erro no login!")
  // }

  return <AppNavigator />

}