import { Marker } from 'react-native-maps';

import UserIcon from "../../assets/map/user.png";
// import UserIcon from "../../assets/map/shop.png";
// import UserIcon from "../../assets/map/clinic.png";

function MarkerMaps({coords, placeholder, type}) {
    return (
        <Marker
            coordinate={coords}
            title={placeholder}
            icon={UserIcon}
            zIndex={10}
        />
    )
}

export {MarkerMaps};
