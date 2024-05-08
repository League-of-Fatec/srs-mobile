import { StatusBar, StyleSheet } from 'react-native';

export default StyleSheet.create({
    loadingContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center'
    }
});