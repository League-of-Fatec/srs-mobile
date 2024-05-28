import { COLORS } from '@/utils/COLORS_APP_LIGHT';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.corNeutra
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerImagem: {
        flex: 1,
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
        backgroundColor: COLORS.corPrincipal,
    },
    botaoFechar: {
        padding: 15,
        backgroundColor: COLORS.corPrincipal,
    },
    textoBotao: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
});