import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from '@/navigation/AppNavigator';
import localeConfigData from '@/utils/ConfigCalendar';
import { Provider } from 'react-redux';
import { store } from '@/redux/Store';

localeConfigData;

export default function App() {

  // const logado = true;

  // if (logado) {
  //   return <TabNavigator />;
  // } if (!logado) {
  //   return Login()
  // } else {
  //   return alert("Erro no login!")
  // }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );

}