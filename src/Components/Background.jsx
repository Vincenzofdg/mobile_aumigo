import {StyleSheet, ImageBackground, Dimensions} from 'react-native';

import CoverImage from '../assets/background/Cover.jpg';
import LoginImage from '../assets/background/Login.jpg';

const {width, height} = Dimensions.get('window');

function Background({name}) {
    const options = {
        Cover: CoverImage,
        Login: LoginImage,
    };

    return (
        <ImageBackground
            source={options[name]}
            resizeMode="cover"
            style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        position: 'absolute',
        height,
        width,
    },
});

export default Background;
