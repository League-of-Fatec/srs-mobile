import { COLORS } from '@/utils/COLORS_APP_LIGHT';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    accordionButtonContainer: {
        alignSelf: 'center',
        width: '90%',
        backgroundColor: COLORS.corNeutra,
        marginVertical: 5,
        borderRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    accordionButton: {
        backgroundColor: COLORS.corNeutra,
        borderRadius: 7,
        paddingVertical: '5%',
        paddingHorizontal: '0%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    nomeAndar: {
        marginLeft: 35,
        textAlign: "center",
        fontSize: 18,
        fontWeight: 'bold'
    },
    infoIcons: {
        fontSize: 25,
        marginRight: 12,

    },
    icons: {
        marginRight: 15,
        width: 25,
        height: 25,
    },

});