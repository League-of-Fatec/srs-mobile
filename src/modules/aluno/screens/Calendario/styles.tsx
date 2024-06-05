import { COLORS } from '@/utils/COLORS_APP_LIGHT';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.corNeutra
  },
  agenda: {
    borderColor: 'gray',
    height: 'auto',
  },
  icons: {
    fontSize: 35,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 20,
    marginVertical: 25,
    padding: 10,
    backgroundColor: COLORS.corSecundaria,
    borderRadius: 100
  },
  timeInfo: {
    marginBottom: 15
  },
  timeIcon: {

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
    flexDirection: 'row',
    marginTop: 15
  }
});