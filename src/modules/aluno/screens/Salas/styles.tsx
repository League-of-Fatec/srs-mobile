import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerAndares: {
        flex: 1,
        marginTop: '8%',
        marginHorizontal: '3%',
        //backgroundColor: 'pink',
    },
    containerSalas: {
        flex: 1,
        margin: '0%',
        //backgroundColor: 'blue',
    },
    scrollSalas: {
        flex: 1,
        margin: '4%',

    },
    nomeAndar: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    botaoSala: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: 'yellow',
        height: 57,
        borderRadius: 7,
        marginVertical: 5
    },
    nomeSala: {
        flex: 1,
        marginLeft: 13,
        color: 'white',
        fontWeight: 'bold'
    },
    infoIcons: {
        fontSize: 25,
        marginRight: 12,
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: 300,
        height: 'auto',
        padding: 20,
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
        alignSelf: 'center',
        marginTop: 40,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#6D1C1C',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
    },
    modalNomeSala: {
        fontWeight: 'bold',
        marginBottom: 15,
    },
    modalText: {
        marginBottom: 15,
    },
    modalHorario: {
        textAlign: 'center',
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#D9D9D9',
        marginBottom: 5,
    },
    viewHorarios: {
        width: '35%',
    },
    viewItens: {
        marginTop: 25
    },
    viewItem: {
        marginTop: 10,
        flexDirection: 'row'
    },
    qtdItens: {
        textAlign: 'center',
        borderRadius: 5,
        width: 35,
        paddingVertical: 6,
        marginRight: 25,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    iconItem: {
        fontSize: 23,
        marginRight: 20,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    nomeItem: {
        fontSize: 17,
    },

});