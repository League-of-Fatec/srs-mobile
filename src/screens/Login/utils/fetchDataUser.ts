import { api_url_local } from '@/utils/API_URLS';
import { Professor, Student } from './loginTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from '@reduxjs/toolkit';
import { NavigationProp } from '@react-navigation/native';
import { StackLoginProps } from '..';
import { professorSlice, studentSlice } from '@/redux/UserSlice';

const fetchDataUser = async (
  email: string,
  password: string,
  dispatch: Dispatch,
  navigation: NavigationProp<StackLoginProps>,
) => {
  try {
    const data = {
      email,
      password,
    };

    const responseLogin = await fetch(`${api_url_local}/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseLoginJson = await responseLogin.json();
    console.log(responseLoginJson);
    const id = responseLoginJson[0].id;
    const userType = responseLoginJson[0].userType;

    //const { user } = await getUserData(id);

    if (userType === 'ALUNO') {
      const responseUser = await fetch(`${api_url_local}/student/${id}`, {
        method: 'GET',
      });

      const responseUserJson: Student[] = await responseUser.json();
      const student = responseUserJson[0];
      console.log(student);

      //const token = 'token';
      const token = {
        id,
      };

      //dispatch(userSlice.actions.login({ user, token }));
      dispatch(studentSlice.actions.login({ student }));
      await AsyncStorage.setItem('token', JSON.stringify(token));
      await AsyncStorage.setItem('userType', userType);

      const currentToken = await AsyncStorage.getItem('token');
      const currentUserType = await AsyncStorage.getItem('userType');

      navigation.navigate('HomeAluno');

      // Código para não permitir que o usuário volte para a tela de login
      navigation.reset({
        index: 0,
        routes: [
          {
            name:
              currentUserType === 'PROFESSOR'
                ? 'HomeProfessor'
                : currentUserType === 'ALUNO'
                ? 'HomeAluno'
                : 'loginInicial',
          },
        ],
      });
    }

    if (userType === 'PROFESSOR') {
      const responseUser = await fetch(`${api_url_local}/teacher/${id}`, {
        method: 'GET',
      });

      const responseUserJson: Professor[] = await responseUser.json();
      const professor = responseUserJson[0];
      console.log(professor);

      //const token = 'token';
      const token = {
        id,
      };

      //dispatch(userSlice.actions.login({ user, token }));
      dispatch(professorSlice.actions.login({ professor }));
      await AsyncStorage.setItem('token', JSON.stringify(token));
      await AsyncStorage.setItem('userType', userType);

      const currentToken = await AsyncStorage.getItem('token');
      const currentUserType = await AsyncStorage.getItem('userType');
      console.log(currentUserType);
      navigation.navigate('HomeProfessor');

      // Código para não permitir que o usuário volte para a tela de login
      navigation.reset({
        index: 0,
        routes: [
          {
            name:
              currentUserType === 'PROFESSOR'
                ? 'HomeProfessor'
                : currentUserType === 'ALUNO'
                ? 'HomeAluno'
                : 'loginInicial',
          },
        ],
      });
    }
  } catch (error) {
    console.error(error);
    throw new Error(JSON.stringify(error));
  }
};

export default fetchDataUser;
