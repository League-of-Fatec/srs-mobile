import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import AppNavigator from '@/navigation/AppNavigator';
import localeConfigData from '@/utils/ConfigCalendar';
import { Provider } from 'react-redux';
import { store } from '@/redux/Store';
import { useFonts } from '@/utils/useFonts';

localeConfigData;

export default function App() {

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const LoadFonts = async () => {
      await useFonts();
      setLoading(true)
    }

    LoadFonts();
  }, []);



  // const logado = true;

  // if (logado) {
  //   return <TabNavigator />;
  // } if (!logado) {
  //   return Login()
  // } else {
  //   return alert("Erro no login!")
  // }

  if (isLoading) {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }


}