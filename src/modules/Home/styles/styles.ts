import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  saludo: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  nombreUsuario: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  citasText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  citaList: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden'
  }
})
