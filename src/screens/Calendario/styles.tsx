import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,

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
  }
});