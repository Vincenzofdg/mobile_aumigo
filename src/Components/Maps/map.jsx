import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

function MapMaps({children, coords}) {
    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.container}
            initialRegion={{
                ...coords,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
            }}
        >
            {children}
        </MapView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: "100%",
    },
});

export {MapMaps};
