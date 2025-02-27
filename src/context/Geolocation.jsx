import {useState, useEffect} from "react";
import { allowLocation, getLocation } from "../tools";
import {Geolocation as Context} from '.';

function GeolocationState({children}) {
    const [userLocation, setUserLocation] = useState({});

    useEffect(() => {
        async function Jobs() {
            const userAllowed = await allowLocation();

            if (!userAllowed) {
                setUserLocation({
                    status: false,
                    coords: [-23.9548235, -46.3309416] // bood coords
                });
                return;
            }

            const geoLocation = await getLocation();

            setUserLocation(geoLocation);
        }

        Jobs();
    }, [])

    const obj = {userLocation};

    return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default GeolocationState;
