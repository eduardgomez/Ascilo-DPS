import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 15,
    flex: 1,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  iconContainer: {
    backgroundColor: "#EAF8F8",
    padding: 10,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000,
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  buttonDescription: {
    color: "#808080"
  }
})
