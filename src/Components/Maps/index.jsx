import {useContext, useEffect, useState} from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import {Geolocation} from '../../context';
import str from "../../languages";
import {MapMaps as Map} from './Map';
import {MarkerMaps as LocationMarker} from './Marker';

const { width, height } = Dimensions.get('screen');

function Maps() {
    const { userLocation } = useContext(Geolocation);
    const [coords, setCoords] = useState({latitude: '', longitude: ''})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!!userLocation.status) {
            setCoords({latitude: userLocation.coords[0], longitude: userLocation.coords[1]});
            setLoading(true);
        }
    }, [userLocation]);

    return loading && (
        <View style={styles.container}>
            <Map coords={coords}>
                <LocationMarker coords={coords} placeholder={str.map.userPlaceholder} type={"user"} />
            </Map>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
    },
});

export default Maps;
