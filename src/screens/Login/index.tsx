import React from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationProp } from '@react-navigation/native'
import User from '@/utils/User';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { userSlice } from '@/redux/UserSlice';
import { loginUser } from './utils/loginUser';
import AsyncStorage from '@react-native-async-storage/async-storage';



type StackLoginProps = {
    loginInicial: any,
    HomeAluno: any,
    HomeProfessor: any,
    ForgotPassword: any
}

export default function Login({ navigation }: { navigation: NavigationProp<StackLoginProps> }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isSelected, setSelection] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const dispatch = useDispatch();

    const handleSubmitLogin = async (email: string, password: string, type: string) => {

        // Lógica de login com a api do backend
        //const { user, token } =  await loginUser()

        const user: User = {
            firstName: "Geraldo",
            lastName: "Vicente",
            course: "DSM",
            semester: "5°",
            registration: "214921414"
        }

        const token = 'token';

        //dispatch(userSlice.actions.login({ user, token }));
        dispatch(userSlice.actions.login({ user }));
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('userType', 'aluno');

        const currentToken = await AsyncStorage.getItem("token");
        const currentUserType = await AsyncStorage.getItem("userType");
        console.log(currentUserType);

        if (currentUserType === "aluno") {
            navigation.navigate("HomeAluno");
        }


        if (currentUserType === "professor") {
            navigation.navigate("HomeProfessor");
        }

        // if (email === "prof" && password === "123") {
        //     navigation.navigate("HomeProfessor");
        // } else if (email === "aluno" && password === "123") {
        //     navigation.navigate("HomeAluno");
        // }


        // Código para não permitir que o usuário volte para a tela de login
        navigation.reset({
            index: 0,
            routes: [{ name: currentUserType === "professor" ? "HomeProfessor" : currentUserType === "aluno" ? "HomeAluno" : "loginInicial" }]
        });

    }



    return (
        <View style={styles.containerFoto}>
            <View style={{ flex: 1, height: '30%', width: '100%' }}>
                <Image source={require("@/assets/images/login/img-reuniao.jpg")} style={styles.image}></Image>

                <View style={styles.container}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.textEmail}>E-mail</Text>
                        <View style={styles.inputView}>
                            <TextInput style={styles.TextInput}
                                inputMode='email'
                                placeholder='Digite seu email.'
                                placeholderTextColor={'#003f5c'}
                                onChangeText={(email) => setEmail(email)} />
                            <Text style={styles.textError}>{emailError}</Text>
                        </View>


                        <Text style={styles.textSenha}>Senha</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Digite sua Senha."
                                placeholderTextColor="#003f5c"
                                secureTextEntry={true}
                                onChangeText={(senha) => setSenha(senha)} />
                            <Text style={styles.textError}>{passwordError}</Text>
                        </View>

                        <View>
                            <Text style={{}}>Manter-se Conectado</Text>
                        </View>


                        <TouchableOpacity style={styles.loginBtn} onPress={() => handleSubmitLogin(email, senha, "prof")}>
                            <Text style={styles.textColorBtn}>ENTRAR PROFESSOR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => handleSubmitLogin(email, senha, "aluno")}>
                            <Text style={styles.textColorBtn}>ENTRAR ALUNO</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.forgot_button}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View >
    );
}