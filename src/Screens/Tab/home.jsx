import {StyleSheet} from 'react-native';
import Geolocation from "../../context/Geolocation";
import Maps from '../../components/Maps';

function HomeScreen({ navigation }) {
    return (
        <Geolocation>
            <Maps />
        </Geolocation>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
});

export default HomeScreen;
