import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

function CoverButton({name}) {
    const {navigate} = useNavigation();

    const handleClick = () => {
        const splitName = name.split(' ');
        const typeOfLogin = splitName[splitName.length - 1].toLowerCase();

        const handlers = {
            email: () => {
                navigate('Login');
            },
            google: () => {
                navigate('HomeTab');
            },
        };

        return handlers[typeOfLogin]();
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handleClick}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        width: width * 0.85,
        height: height * 0.065,
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
        color: '#E2DFD2',
    },
});

export {CoverButton};
