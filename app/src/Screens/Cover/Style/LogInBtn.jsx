import { StyleSheet, Dimensions } from 'react-native';

const d = Dimensions.get("screen");

const css = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width: d.width * 0.85,
    height: d.height * 0.065,
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    color: "#E2DFD2"
  }
})

export default css;