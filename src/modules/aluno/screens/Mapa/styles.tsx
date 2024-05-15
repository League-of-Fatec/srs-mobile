import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerImagem: {
        flex: 1,
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25
    },
    imageViewer: {
        flex: 1,
    },
    botaoAbrir: {
        borderRadius: 20,
        padding: 15,
        backgroundColor: "#6D1C1C",
    },
    botaoFechar: {
        padding: 15,
        backgroundColor: "#6D1C1C",
    },
    textoBotao: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
});