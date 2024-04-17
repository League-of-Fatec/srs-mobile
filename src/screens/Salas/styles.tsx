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
});