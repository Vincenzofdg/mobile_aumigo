import { StyleSheet, Dimensions } from 'react-native';

const d = Dimensions.get("screen");

const css = StyleSheet.create({
  container: {
    width: d.width * 0.65,
    borderBottomWidth: 1.2,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20
  },
  icon: {
    height: 25,
    width: 25
  },
  input: {
    flexGrow: 1,
    marginLeft: 10,
  }
})

export default css;