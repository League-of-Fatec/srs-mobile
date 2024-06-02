import { COLORS } from '@/utils/COLORS_APP_LIGHT';
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

    timelineContainer: {
        width: '100%',
    },
    timelineButton: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        alignSelf: 'flex-end',
        paddingVertical: 7,
        paddingHorizontal: 7,
        backgroundColor: COLORS.corPrincipal,
        width: '28%'
    },
    timelineTextButton: {
        fontSize: 10,
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    timelineTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    timelineWeekDayView: {

    },
    timelineTextView: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
    },
    timelineText: {
        marginTop: 5,
        fontSize: 18,
        color: '#7f7f7f',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    viewTimelineContainer: {
        paddingVertical: 15,
        borderRightWidth: 4,
        borderRightColor: COLORS.corSecundaria,
        width: 130,
        height: 180,
    },
    viewTimeline: {
        width: '80%',
        height: 'auto',
        alignSelf: 'center',
        backgroundColor: COLORS.corSecundaria2,
        marginBottom: 5,
        borderRadius: 7,
    },
    timeViewTimeline: {
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 6,
        fontWeight: 'bold',
    },
    nameViewTimeline: {
        textAlign: 'center',
        paddingBottom: 10,
    },


});