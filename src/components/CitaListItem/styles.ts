import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 1,
  },
  containerInProgress: {
    backgroundColor: '#27B2B3',
  },
  citaContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  verMasBotonTexto: {
    color: '#808080',
    fontWeight: '500',
    fontSize: 16
  },
  citaTexto: {
    fontSize: 20,
    fontWeight: "600"
  },
  dateContainer: {
    borderLeftColor: "#D9D9D9",
    borderLeftWidth: 1,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 15,
    fontWeight: '500',
  },
  hourText: {
    fontSize: 16,
  },
  iconContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
