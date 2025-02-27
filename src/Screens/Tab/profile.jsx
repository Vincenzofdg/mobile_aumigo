import {StyleSheet, SafeAreaView} from 'react-native';
import Background from '../../components/background';

function ProfileScreen({ navigation }) {
    return (
        <>
            <Background name="Cover" />
            <SafeAreaView style={styles.container}>

            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
});

export default ProfileScreen;
