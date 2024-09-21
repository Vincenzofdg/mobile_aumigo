import { StyleSheet, Dimensions } from 'react-native';

const d = Dimensions.get("screen");

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttons: {
    padding: 15,
    marginBottom: d.height * 0.02,
  },
  bar: {
    backgroundColor: "#484848",
    opacity: 0.7,
    width: d.width * 0.3,
    height: d.height * 0.005,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 20
  }
})

export default css;