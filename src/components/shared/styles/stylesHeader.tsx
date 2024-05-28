import { COLORS } from '@/utils/COLORS_APP_LIGHT';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        backgroundColor: COLORS.corSecundaria,
        flexDirection: 'row',
        width: '100%',
        height: 87,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35
    },
    headerTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});