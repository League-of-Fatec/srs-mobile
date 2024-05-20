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
    }
});