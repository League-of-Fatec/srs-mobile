import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    // Estilos do header

    headerHome: {
        backgroundColor: "#D9D9D9",
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
        backgroundColor: "#FFFFFF",
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
        backgroundColor: '#d9d9d9',
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
        backgroundColor: '#d9d9d9',
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
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 2,
    },
    descAluno: {

    },
    bottomCarteirinha: {
        flexDirection: 'row',
        backgroundColor: '#3a3a3a',
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
        backgroundColor: "#D9D9D9",
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
        backgroundColor: '#6D1C1C',
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
        height: '63%',
        paddingBottom: '10%',

    },
    titleProximasAulas: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    },

    // Cards Próximas aulas

    itemAula: {
        backgroundColor: "#D9D9D9",
        width: 235,
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
        fontWeight: 'bold',
    },
    descAula: {

    },
    viewAula: {


    },
    botaoVerMais: {
        width: '25%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginTop: 20,
        paddingVertical: 9,
        paddingHorizontal: 15,
        backgroundColor: '#6D1C1C',
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
    cardFotoProfessor: {
        flexDirection: 'row',
    },

    iconProf: {
        width: '22%',
        alignSelf: 'center',
        margin: 5,
        padding: 5,
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
        fontSize: 40,
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
    }


});