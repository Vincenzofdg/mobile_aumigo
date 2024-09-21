import { StyleSheet, ImageBackground, Dimensions } from 'react-native';

import imgs from '../Global/Images';

const d = Dimensions.get('window')

function Background({name}) {
  const { background } = imgs

  return (
    <ImageBackground
      source={background[name]}
      resizeMode="cover"
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    height: d.height,
    width: d.width,
  }
})

export default Background;