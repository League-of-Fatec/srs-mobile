import AsyncStorage from '@react-native-async-storage/async-storage';

export const logout = async () => {
  await AsyncStorage.removeItem('token');
  await AsyncStorage.removeItem('userType');
  // Agora você precisa atualizar o estado do token e do tipo de usuário no seu AuthNavigator
};
