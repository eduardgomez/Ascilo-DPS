import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  datosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  datosText: {
    fontSize: 18,
    color: '#7F7F7F',
    fontWeight: "500"
  },
  fontBold: {
    fontWeight: '900',
  },
  infoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  infoIcon: {
    marginRight: 6,
    width: 24,
  }
})