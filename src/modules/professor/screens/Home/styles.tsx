import { COLORS } from '@/utils/COLORS_APP_LIGHT';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.corNeutra
    },
    headerHome: {
        backgroundColor: COLORS.corSecundaria,
        padding: 30,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 70,
        height: 70
    },
    infoProf: {
        marginLeft: 10,

    },
    containerPrincipal: {
        flex: 1,
        backgroundColor: COLORS.corNeutra,
        paddingLeft: 13,
        paddingRight: 13
    },
    containerSalasFavoritas: {
        flex: 1,
        justifyContent: 'center',
        height: '43%',
    },
    page: {
        backgroundColor: COLORS.corSecundaria,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },
    title1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    title2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    },
    listaSalas: {

    },
    itemLista: {
        backgroundColor: COLORS.corSecundaria,
        padding: 20,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    titleEvento: {

    },
    descEvento: {

    },
    viewEvento: {

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: COLORS.corNeutra,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    // Seção de próximas aulas

    containerProximasAulas: {
        paddingTop: '5%',
        height: '56%',
        paddingBottom: '2%',

    },
    titleProximasAulas: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    },

    // Cards Próximas aulas

    itemAula: {
        backgroundColor: COLORS.corSecundaria,
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
    cardFotoProfessor: {
        flexDirection: 'row',
    },

    iconProf: {
        width: '22%',
        alignSelf: 'center',
        margin: 5,
        padding: 5,
        borderRadius: 100,
        backgroundColor: COLORS.corNeutra,
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
    },
    viewNoFavoriteClassrooms: {
        height: 210,
        flex: 1,
        justifyContent: 'center',

    },
    viewTextNoFav: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textNoFav1: {
        textAlign: 'center',
        fontSize: 18,
    },
    textNoFav2: {
        textAlign: 'center',
        fontSize: 18,
        fontStyle: 'italic',
    },
    buttonNoFav: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: COLORS.corPrincipal,
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 20,
    },
    textNoFav3: {
        color: COLORS.corNeutra,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    textNoFav4: {
        marginTop: 13,
        marginBottom: 8,
        textAlign: 'center',
        fontSize: 14,
        fontStyle: 'italic',
    },
    iconNoFav: {
        marginLeft: 4,
        color: COLORS.corNeutra,
        fontSize: 16
    },
    textSalaFav: {
        fontSize: 15
    },
    textAndarSalaFav: {
        fontSize: 15,
        fontWeight: 'bold'
    },
});