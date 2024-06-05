import { COLORS } from '@/utils/COLORS_APP_LIGHT';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.corNeutra
    },

    // Estilos do header

    headerHome: {
        backgroundColor: COLORS.corSecundaria,
        paddingVertical: 30,
        padding: 13,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        flexDirection: "row",
        alignItems: "center",
    },
    textHomeSaudacao: {
        fontSize: 20
    },
    textHome: {
        fontWeight: "bold",
        fontSize: 20
    },
    logo: {

    },
    config: {
        justifyContent: 'flex-end',
    },
    image: {
        marginLeft: 10,
        width: 100,
        resizeMode: 'contain'

    },
    infoProf: {
        flexDirection: 'row',
        marginLeft: 10,

    },
    containerPrincipal: {
        flex: 1,
        backgroundColor: COLORS.corNeutra,
        paddingLeft: 13,
        paddingRight: 13
    },

    containerInfoAluno: {
        height: '40%'
    },

    // Estilos carteirinha do aluno

    carteirinha: {
        height: "80%",
        marginTop: '10%',
        alignSelf: 'center',
        width: '95%',

    },
    topCarteirinha: {
        backgroundColor: COLORS.corSecundaria,
        flexDirection: 'row',
        height: '80%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    fotoEstudanteView: {
        flex: 1,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fotoEstudante: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: "#7030a0"
    },
    infoAlunoView: {
        justifyContent: 'center',
        backgroundColor: COLORS.corSecundaria,
        width: '70%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    infoAluno: {
    },
    descAlunoView: {
        flexDirection: 'row',
    },
    nomeAluno: {
        width: '80%',
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 2,
    },
    descAlunoLabel: {
        fontWeight: 'bold',
        width: '25%',
    },
    descAluno: {
        fontStyle: 'italic',
        width: '73%',
    },
    bottomCarteirinha: {
        flexDirection: 'row',
        backgroundColor: COLORS.telaHome.carteirinha.corPrincipal,
        height: '20%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    carteirinhaDigital: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%'
    },
    qrCode: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%'
    },
    iconsCarteirinhaBottom: {
        color: '#FFFFFF',
        padding: 8,
        fontSize: 20,
        paddingTop: 10
    },
    textoBottomCarteirinha: {
        color: '#FFFFFF'
    },
    title1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },


    itemLista: {
        backgroundColor: COLORS.corSecundaria,
        marginBottom: 10,
        borderRadius: 10
    },

    // Modal Carteirinha

    iconsModalCarteirinha: {
        color: '#6D1C1C',
        padding: 8,
        fontSize: 50,
        paddingTop: 10
    },

    modalCarteirinha: {
        flex: 1,
        justifyContent: 'space-between',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        backgroundColor: '#bbbbbb',
        width: '100%',
        height: '92%'
    },
    viewCarteirinha: {

    },
    footerCarteirinha: {
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.corPrincipal,
    },
    textoFooterCarteirinha: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    cartaoCarteirinha: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    // Seção de próximas aulas

    containerProximasAulas: {
        paddingTop: '5%',
        height: '58%',
        paddingBottom: '2%',

    },
    titleProximasAulas: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    },

    // Cards Próximas aulas

    viewNoClasses: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 350,
    },
    textNoClasses1: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    textNoClasses2: {
        width: '70%',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 7,
        marginBottom: 15,
    },
    textNoClasses3: {
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 16,
        marginBottom: 40,

    },

    itemAula: {
        backgroundColor: COLORS.corSecundaria,
        width: 235,
        height: 200,
        borderRadius: 15,
        marginRight: 15,
        paddingVertical: 10,
        paddingHorizontal: 2,
    },
    titleAula: {
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 5
    },
    nomeProfessor: {
        fontWeight: 'bold',
    },
    descSala: {
        fontStyle: 'italic'
    },
    descAula: {

    },
    viewAula: {


    },
    botaoVerMais1: {
        width: 90,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginTop: 20,
        paddingVertical: 9,
        backgroundColor: COLORS.corPrincipal,
        borderRadius: 10,
    },
    botaoVerMais2: {
        position: 'absolute',
        bottom: 36,
        width: 90,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingVertical: 9,
        backgroundColor: COLORS.corPrincipal,
        borderRadius: 10,
    },
    textoBotaoVerMais: {
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    cardAula: {
        height: '50%',
        flexDirection: 'row',
        width: '100%',
    },
    cardDescAula: {
        width: '73%',
        justifyContent: 'center',
    },
    cardDescSala: {
        height: '37%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconAluno: {
        width: '22%',
        alignSelf: 'center',
        margin: 5,
        padding: 5,
        borderRadius: 100,
        backgroundColor: COLORS.corNeutra,
        fontSize: 40,
    },

});