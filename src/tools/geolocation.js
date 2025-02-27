import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const warningBlock = {
    title: 'Permissão de Localização',
    message: 'O app precisa acessar sua localização',
    buttonNeutral: 'Pergunte depois',
    buttonNegative: 'Cancelar',
    buttonPositive: 'OK',
}

const locationOptions = {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 10000,
}

export const getLocation = () => {
    const promise = (resolve, reject) => {
        Geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve({
                    status: true,
                    coords: [coords.latitude, coords.longitude]
                })
            },
            (error) => {
                console.error(error.message)
                reject({
                    status: false,
                    coords: [coords.latitude, coords.longitude]
                })
            },
            // locationOptions
        );
    }

    return new Promise(promise);
};

export const allowLocation = async () => {
    if (Platform.OS === 'ios') {
        return;
    }

    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            warningBlock
        )

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return true
        }
    } catch (error) {
        console.warn(err);
        return false
    }
}
