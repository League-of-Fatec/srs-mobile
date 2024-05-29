import { COLORS } from '@/utils/COLORS_APP_LIGHT';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.corNeutra
  },
  weekDayText: {
    color: 'gray',
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  selectedLabel: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: COLORS.corPrincipal,
    borderRadius: 180

  },
  touchable: {
    borderRadius: 20,
    padding: 10,
    height: 60,
    width: 60,
  },
  selectedTouchable: {
    borderRadius: 20,
    padding: 10,
    height: 60,
    width: 60,
    //Bakcgroundcolor: 'green',
  },
  weekDayItem: {
    alignItems: 'center',
  },
  containerMA: {
    height: 63,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'

  },
  mesEano: {
    fontSize: 20
  },
  agenda: {
    borderColor: 'gray',
    height: 'auto',
  },
  icons: {
    fontSize: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 5,
    marginLeft: 7,
    marginRight: 17,
    padding: 10,
    backgroundColor: COLORS.corSecundaria,
    borderRadius: 100
  },
  viewReservations: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  reservationInfo: {

  },
  textTime: {
    fontStyle: 'italic',
  },
  textClassroomFloor: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  textCourseName: {
    fontStyle: 'italic',
    width: 310,
  },
  textClassName: {
    fontStyle: 'italic',
    width: 310,
  },

  viewCancelReservationButton: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  cancelReservationButton: {
    alignSelf: 'center',
    borderRadius: 20,
    padding: 10,
    width: 150,
    backgroundColor: COLORS.corPrincipal
  },
  cancelReservationTextButton: {
    textAlign: 'center',
    color: COLORS.corNeutra,
    fontWeight: 'bold',
  },
  linhaOpcoes: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
    opacity: 1,
    alignSelf: 'center'
  },
  containerTime: {

  }
});