import React, { useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationProp } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import fetchDataUser from './utils/fetchDataUser';
import LoadingLogin from '@/components/shared/LoadingLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';



export type StackLoginProps = {
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

    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const handleSubmitLogin = async (email: string, password: string) => {
        setIsLoading(true);

        try {

            // Tratamento de erros
            if (!email && !password) {
                setIsLoading(false);
                throw new Error("Falta a senha e o email");
            }

            await fetchDataUser(email, password, dispatch, navigation);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
        // Lógica de login para o back End


    }

    useEffect(() => {
        const test = async () => {
            const token = await AsyncStorage.getItem("Token");
            const userType = await AsyncStorage.getItem("UserType");

            console.log("Token: ", token);
            console.log("UserType: ", userType);
        }

        test();
    }, []);


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


                        <TouchableOpacity style={styles.loginBtn} onPress={() => handleSubmitLogin(email, senha)}>
                            <Text style={styles.textColorBtn}>
                                {!isLoading ? "ENTRAR" : <LoadingLogin />}
                            </Text>
                        </TouchableOpacity>
                        {/* 
                        <TouchableOpacity style={styles.loginBtn} onPress={() => handleSubmitLogin(email, senha, "prof")}>
                            <Text style={styles.textColorBtn}>ENTRAR PROFESSOR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => handleSubmitLogin(email, senha, "aluno")}>
                            <Text style={styles.textColorBtn}>ENTRAR ALUNO</Text>
                        </TouchableOpacity>
                        */}
                        <TouchableOpacity>
                            <Text style={styles.forgot_button}>Esqueci minha senha</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        </View >
    );
}