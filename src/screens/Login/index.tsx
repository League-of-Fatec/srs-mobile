import React from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationProp } from '@react-navigation/native'

type StackLoginProps = {
    HomeContext: any,
}

export default function Login({ navigation }: { navigation: NavigationProp<StackLoginProps> }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isSelected, setSelection] = useState(false);

    const loginProcess = () => {
        navigation.navigate("HomeContext")

        // Código para não permitir que o usuário volte para a tela de login
        /* navigation.reset({
             index: 0,
             routes: [{ name: 'Home' }],
         });
         */
    }


    return (
        <View style={styles.containerFoto}>
            <View style={{ flex: 1, height: '30%', width: '100%' }}>
                <Image source={require("@/assets/images/login/img-reuniao.jpg")} style={styles.image}></Image>

                <View style={styles.container}>


                    <GestureHandlerRootView style={{ flex: 1 }}>
                        <Text style={styles.textEmail}>E-mail</Text>
                        <View style={styles.inputView}>
                            <TextInput style={styles.TextInput}
                                placeholder='Digite seu email.'
                                placeholderTextColor={'#003f5c'}
                                onChangeText={(email) => setEmail(email)} />
                        </View>

                        <Text style={styles.textSenha}>Senha</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Digite sua Senha."
                                placeholderTextColor="#003f5c"
                                secureTextEntry={true}
                                onChangeText={(senha) => setSenha(senha)} />
                        </View>

                        <View>
                            <Text style={{}}>Manter-se Conectado</Text>
                        </View>


                        <TouchableOpacity style={styles.loginBtn} onPress={loginProcess}>
                            <Text style={{}}>ENTRAR</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.forgot_button}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                    </GestureHandlerRootView>
                </View>

            </View>
        </View >
    );
}