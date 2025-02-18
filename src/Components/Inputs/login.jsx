import {useState} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';
import str from '../../languages';
import UserImage from '../../assets/user.png';
import PasswordImage from '../../assets/password.png';

import EyeClosedImg from '../../assets/eye-closed.png';
import EyeOpenImg from '../../assets/eye-opened.png';

const {width} = Dimensions.get('screen');

function LoginInput({type, value, setter, i}) {
    const [hidden, setHidden] = useState(type === 'password');

    const handleChange = inputValue =>
        setter(prev => ({...prev, [type]: inputValue}));

    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={type === 'username' ? UserImage : PasswordImage}
            />
            <TextInput
                value={value}
                style={styles.input}
                onChangeText={handleChange}
                placeholder={str.login.placeholders[i]}
                placeholderTextColor={'black'}
                autoCapitalize="none"
                secureTextEntry={hidden}
            />
            {type === 'password' && (
                <TouchableOpacity onPress={() => setHidden(prev => !prev)}>
                    <Image
                        style={styles.icon}
                        source={hidden ? EyeOpenImg : EyeClosedImg}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.7,
        borderBottomWidth: 1.2,
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    icon: {
        height: 25,
        width: 25,
    },
    input: {
        color: 'black',
        flexGrow: 1,
        marginLeft: 15,
    },
});

export {LoginInput};
