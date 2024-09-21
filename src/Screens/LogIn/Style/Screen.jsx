import { StyleSheet, Dimensions } from 'react-native';

const d = Dimensions.get("screen");

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row'
  },
  normalText: {
    fontSize: 15,
    fontWeight: "300",
  },
  textPress: {
    fontWeight: "700",
    fontSize: 15,
    marginLeft: 7,
    color: "#E97451"
  },
  btn: {
    backgroundColor: "black",
    width: d.width * 0.4,
    padding: 12,
    marginTop: 10
  },
  btnText: {
    color: "#E2DFD2",
    fontWeight: "600",
    textAlign: 'center'
  }
})

export default css;