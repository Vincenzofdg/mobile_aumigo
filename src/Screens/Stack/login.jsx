import {useState, useEffect} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import str from '../../languages';
import Background from '../../components/background';
import {LoginInput} from '../../components/Inputs';
import {LoginButton} from '../../components/Buttons';
import {validateLogin} from '../../tools';

function LoginScreen() {
    const [info, setInfo] = useState({username: '', password: ''});
    const [canSubmit, setCanSubmit] = useState(false);

    useEffect(() => {
        const checkIfCanSubmit = validateLogin(info);
        setCanSubmit(checkIfCanSubmit);
    }, [info]);

    return (
        <>
            <Background name="Login" />
            <SafeAreaView style={styles.container}>
                {str.login.inputs.map((type, i) => (
                    <LoginInput
                        key={`login-input-${i}`}
                        type={type}
                        value={info[type]}
                        setter={setInfo}
                        i={i}
                    />
                ))}

                <View style={styles.textContainer}>
                    <Text style={styles.text}>{str.forgotPassword}</Text>
                    <TouchableOpacity>
                        <Text style={[styles.text, styles.press]}>
                            {str.clickHere}
                        </Text>
                    </TouchableOpacity>
                </View>

                <LoginButton canBePressed={canSubmit} payload={info} />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    text: {
        fontSize: 15,
        fontWeight: '300',
    },
    press: {
        fontWeight: '700',
        marginLeft: 7,
        color: '#E97451',
    },
});

export default LoginScreen;
