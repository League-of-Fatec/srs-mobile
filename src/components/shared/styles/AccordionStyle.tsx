import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    accordionButtonContainer: {
        paddingVertical: '5%',
        paddingHorizontal: '0%',
        backgroundColor: "#FFFFFF",
        borderRadius: 7,
        marginVertical: 5,

        // borderColor: "black",
        // borderBottomWidth: 3,
        // borderRightWidth: 3,

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

    }

});