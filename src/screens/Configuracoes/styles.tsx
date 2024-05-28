import { COLORS } from '@/utils/COLORS_APP_LIGHT';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.corNeutra
    },
    btnVoltar: {
        position: 'absolute',
        left: 30
    },
    header: {
        backgroundColor: COLORS.corSecundaria,
        flexDirection: 'row',
        width: '100%',
        height: 87,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35
    },
    headerTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerGeral: {
        marginHorizontal: '8%',
        marginTop: '8%',
    },
    containerPrincipal: {
        flex: 1,
        width: '100%',
    },
    containerInfo: {
        margin: '8%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    infoConta: {
        flex: 1,
        alignSelf: 'center',
        marginLeft: 15
    },
    image: {
        width: 70,
        height: 70
    },
    nomeConta: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    editarConta: {

    },
    containerOpcoes: {
        marginHorizontal: '8%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    itemOpcoes: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,

    },
    linhaOpcoes: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: '90%',
        opacity: 0.1,
        alignSelf: 'center'
    },
    infoIcons: {
        fontSize: 25,
        marginRight: 12
    },
    infoTitulo: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    infoSwitch: {
        flex: 1,
        justifyContent: 'flex-end',
    },


});