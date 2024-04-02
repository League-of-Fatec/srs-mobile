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
      header: {
        backgroundColor: '#D9D9D9',
        width: '100%',
        height: 87,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
      },
      headerTitulo:{
        fontSize: 20,
        fontWeight: 'bold',
      },
      containerMA:{
        height: 63,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'

      },
      mesEano:{
        fontSize: 20
      }
    });