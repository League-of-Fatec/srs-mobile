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