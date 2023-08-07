import { StyleSheet } from "react-native";

export default StyleSheet.create({
  image: {
    height: 250,
    width: 175,
    borderRadius: 8
  },
  container: {
    justifyContent: "center",
    paddingTop: 20,
    alignItems: "center",
    maxWidth: 175,
    height: 300

  },
  containerImg: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    flexWrap: "wrap",
  }
})