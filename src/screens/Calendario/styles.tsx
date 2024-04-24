import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: '#6D1C1C',
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
    borderWidth: 1,
    borderColor: 'gray',
    height: 'auto',
  },
  icons: {
    fontSize: 35,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 20,
    paddingVertical: 25
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