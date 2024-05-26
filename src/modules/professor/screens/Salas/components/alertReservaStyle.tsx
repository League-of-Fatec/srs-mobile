import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    // Modal Reserva sucesso

    modalAlertReserva: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    alertContainer: {
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        margin: '1%',
        width: '90%',
        height: '40%'
    },
    statusReservaContainerSuccess: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: 'green',
        marginVertical: '3%'
    },
    statusReservaContainerFailed: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: '#6e1a18',
        marginVertical: '3%'
    },
    icon: {
        fontSize: 80,
        color: '#FFFFFF',
    },
    textReservaContainer: {
        marginBottom: '8%',
        padding: '5%'
    },
    buttonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 15,
    },
    buttonContainerCancel: {
        alignSelf: 'center',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 15,
    },
    button: {
        borderRadius: 13,
        paddingHorizontal: 30,
        paddingVertical: 7,
        backgroundColor: '#bfbfbf'
    },
    buttonEdit: {
        borderRadius: 13,
        width: 100,
        paddingHorizontal: 15,
        paddingVertical: 7,
        backgroundColor: '#bfbfbf'
    },
    buttonConfirm: {
        borderRadius: 13,
        width: 100,
        paddingHorizontal: 15,
        paddingVertical: 7,
        backgroundColor: 'green'
    },
    textReserva: {
        marginLeft: 10,
        fontSize: 15,
        marginBottom: 5,
    },
    textReservaBold: {
        fontWeight: 'bold',
        fontSize: 15
    },
    textButton: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#FFFFFF"
    },

    // Modal Revise suas informações

    viewInfo: {
        flexDirection: 'row',
        marginBottom: 10
    },
    textReservaContainerRevisar: {
        padding: 15,
        width: '100%',
        marginBottom: '5%',
    },

    alertContainerRevisar: {
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        margin: '1%',
        width: '90%',

    },

    infoContainer: {
        width: '70%',
    },
    infoContainerTitle: {
        width: '30%',
    },
    textReservaRevisar: {
        alignSelf: 'center',
        paddingTop: 15,
        paddingBottom: 40,
        margin: 10,
    },
    textReservaDescricaoTitle: {
        textAlign: 'center',
        fontSize: 15,
    },
    textReservaDescricao: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    titleRevisar: {
        textAlign: 'center',
        paddingBottom: 16,
        fontSize: 18,
        fontWeight: 'bold'
    },

    descricaoContainer: {
        alignSelf: 'center',
        height: 100,
        backgroundColor: '#d9d9d9',
        padding: 7,
        width: '95%'
    },

    // Modal Cancele

    textReservaCancel: {
        textAlign: 'center',
    },
    textReservaSuccess: {
        fontSize: 18,
        textAlign: 'center',
    }

});