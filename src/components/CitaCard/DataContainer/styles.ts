import { StyleSheet } from "react-native";

export default StyleSheet.create({
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
  },
  dataTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dataText: {
    fontSize: 14,
    marginLeft: 5,
    color: '#666',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#aaa',
  },
})