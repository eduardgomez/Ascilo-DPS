import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 1,
    borderRadius: 0,
    marginBottom: 10,
    paddingBottom: 10,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7F7F7F'
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
    paddingBottom: 10,
  },
  datosText: {
    fontSize: 16,
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