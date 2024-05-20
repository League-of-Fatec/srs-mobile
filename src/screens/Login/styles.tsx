import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerFoto: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        paddingLeft: '10%',
        paddingRight: '10%'

    },
    textEmail: {
        fontSize: 15,
        marginTop: 63,
    },
    textSenha: {
        fontSize: 15,
        marginTop: 10,
    },
    image: {
        height: '35%',
        width: '100%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    inputView: {
        backgroundColor: "#E5E4E2",
        borderRadius: 20,
        width: '100%',
        height: 45,
        marginTop: 2,
        marginBottom: 20,

    },
    TextInput: {
        padding: 10,
    },
    forgot_button: {
        height: 30,
        marginTop: '10%',
        color: '#3E74FF',
        marginLeft: '27%',
        marginRight: '27%',
    },
    loginBtn: {
        width: "100%",
        borderRadius: 10,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#3E74FF",
    },
    textColorBtn: {
        color: 'white'
    },
    textError: {
        color: 'red',
        fontSize: 12,
        textAlign: 'right',
        marginRight: 10,
    }

});