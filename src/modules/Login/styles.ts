import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: '#27B2B3',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderBottomLeftRadius: 100,
  },
  subtitleText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  titleText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  subcontainer: {
    flex: 1,
    backgroundColor: '#27B2B3',
  },
  formcontainer: {
    paddingHorizontal: 20,
    paddingVertical: 60,
    flex: 1,
    backgroundColor: '#F2F2F2',
    borderTopRightRadius: 80,
  },
  dividersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  divider: {
    flex: 1,
    height: 1,
    marginHorizontal: 10,
    backgroundColor: '#ccc'
  },
})
