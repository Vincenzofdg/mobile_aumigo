import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

function LoginButton({canBePressed, payload}) {
    const {navigate} = useNavigation();

    const handleClick = () => {
        return;
    };

    return (
        <TouchableOpacity
            style={[styles.container, !canBePressed && styles.disabled]}
            disabled={!canBePressed}
            onPress={handleClick}>
            <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        width: width * 0.5,

        padding: 12,
        borderRadius: 5,

        marginTop: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        color: '#E2DFD2',
        textAlign: 'center',
    },
    disabled: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export {LoginButton};
