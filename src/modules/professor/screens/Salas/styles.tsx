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
        margin: '0%',
        //backgroundColor: 'blue',
    },
    scrollSalas: {
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
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '86%',
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
        backgroundColor: '#6D1C1C',
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
        borderRightColor: '#D3D3D3',
        width: 130,
        height: 180,
    },
    viewTimeline: {
        width: '80%',
        height: 'auto',
        alignSelf: 'center',
        backgroundColor: '#f3f3f3',
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


    viewItens: {
        alignSelf: 'center',
        borderRadius: 15,
        backgroundColor: '#f3f3f3',
        marginTop: 25,
        width: '85%',
        paddingVertical: '5%',
    },
    viewItensSalas: {
        alignSelf: 'center',
        justifyContent: 'center',

    },
    viewItem: {
        marginTop: 10,
        flexDirection: 'row'
    },
    textItens: {
        fontWeight: 'bold',
        paddingHorizontal: 15,
        paddingVertical: 5
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
        fontSize: 25,
        marginRight: 20,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    nomeItem: {
        fontSize: 15,
    },

    titleReservation: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
        paddingBottom: 30,
    },

    containerClasses: {
        marginBottom: '10%',
    },
    classTitle: {

    },
    containerCourses: {

    },
    courseName: {

    },
    pickerClasses: {

    },

    containerCalendar: {

    },
    containerReservation: {

    },
    selectTimeView: {
        marginTop: 10,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    startAndEndDate: {
        paddingVertical: 20,
    },
    containerDate: {
        justifyContent: 'center',
    },
    centeredDate: {
        alignSelf: 'center',
        flexDirection: 'column',
    },
    reservatedDateText: {
        borderWidth: 1,
        textAlign: 'center',
    },
    dateLabel1: {
        borderWidth: 1,
        fontWeight: 'bold',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomWidth: 0,
        textAlign: 'center',
        backgroundColor: '#d9d9d9',
        paddingHorizontal: 5,
        paddingVertical: 2,
    },
    dateLabel2: {
        textAlign: 'center',
        width: 85,
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginLeft: 20,
        marginBottom: 7,

    },
    startAndEndTime: {
        width: '100%',
        flexDirection: 'row',
    },

    labelTimeView: {
        alignItems: 'center',
        alignSelf: 'center',
        width: '50%',
        flexDirection: 'column'
    },

    valueTimeView: {
        alignItems: 'center',
        alignSelf: 'center',
        width: '50%',
        flexDirection: 'column'
    },

    labelTime: {
        width: '50%',
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#d9d9d9',
        borderRadius: 4,
        marginBottom: 6,
    },
    labelTimeText: {
        textAlign: 'center',
    },

    valueTime: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        width: '60%',
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#3a3a3a',
        borderRadius: 4,
        marginBottom: 6,
    },

    reasonTextInput: {
        textAlignVertical: 'top',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#BFBFBF',
        backgroundColor: "#F6F6F6",
        height: 100
    },
    textError: {
        textAlign: 'right',
        fontSize: 12,
        color: 'red'
    }

});