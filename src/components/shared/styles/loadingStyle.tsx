import { StatusBar, StyleSheet } from 'react-native';

export default StyleSheet.create({
    loadingContainerSalas: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingContainerLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingContainerReserva: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingContainerModalProfessor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '50%',
    },
    loadingSalasFavoritas: {
        height: 220,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingContainerForgotPassword: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});