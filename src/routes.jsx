import {StatusBar, Platform, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';
import {theme, options} from './config';
import {stackScreen, tabScreen} from './screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import ProfileIcon from "./assets/tab/profile.png"
import HomeIcon from "./assets/tab/map.png"
import SearchIcon from "./assets/tab/search.png"

export default function App() {
    const HomeTab = () => {
        const css = {
            width: 25,
            height: 25,
            marginTop: Platform.OS === "ios" ? 30 : 6,
            marginBottom: Platform.OS === "ios" ? 40 : 5,
            resizeMode: "contain",
        };

        const icons = {
            Home: HomeIcon,
            Profile: ProfileIcon,
            Search: SearchIcon,
        }

        return (
            <Tab.Navigator initialRouteName="Home" screenOptions={options.tab}>
                    {
                        [...Object.keys(tabScreen)]
                            .map((e, i) => {
                                    return (
                                        <Tab.Screen
                                            key={`tab-${e}`}
                                            name={e}
                                            component={tabScreen[e]}
                                            options={{
                                                tabBarIcon: ({ focused }) =>
                                                    <Image
                                                        source={icons[e]}
                                                        style={[css, focused && {tintColor: "white"}]}
                                                    />
                                            }}
                                        />
                                    )
                                }
                            )
                    }
                </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer theme={theme}>
            <StatusBar
                barStyle={
                    Platform.OS === 'ios' ? 'dark-content' : 'light-content'
                }
                backgroundColor="black"
            />
            <Stack.Navigator
                screenOptions={options.stack}
                initialRouteName="Cover">
                {[...Object.keys(stackScreen)].map((e, _i) => (
                    <Stack.Screen
                        key={`stack-${e}`}
                        name={e}
                        component={stackScreen[e]}
                    />
                ))}
                <Stack.Screen name={"HomeTab"} component={HomeTab} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
