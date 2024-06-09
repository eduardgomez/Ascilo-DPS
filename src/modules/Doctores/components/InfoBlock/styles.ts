import { StyleSheet } from "react-native";

export default StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  labelText: {
    fontSize: 16,
    color: '#555',
    fontWeight: 'bold',
  },
  valueText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})