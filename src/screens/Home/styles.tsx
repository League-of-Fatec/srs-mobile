import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    navbar: {
        backgroundColor: "#D9D9D9",
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
        backgroundColor: "#FFFFFF",
        paddingLeft: 13,
        paddingRight: 13
    },
    containerProximosEventos: {
        //marginTop: '5%',
        paddingTop: '5%',
        height: '50%',
        //marginBottom: '3%'
        paddingBottom: '3%'

    },
    containerSalasFavoritas: {
        height: '50%'
    },
    page: {
        backgroundColor: "#D9D9D9",
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
        backgroundColor: "#D9D9D9",
        marginBottom: 10,
        borderRadius: 10
    },
    itemEvento: {
        backgroundColor: "#D9D9D9",
        width: '27%',
        marginRight: 20,
        borderRadius: 15
    },
    titleEvento: {

    },
    descEvento: {

    }
});