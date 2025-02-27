import {Platform} from 'react-native';
import {DefaultTheme} from '@react-navigation/native';
import Theme from './theme';

export const theme = {
    ...DefaultTheme,
    colors: {
        primary: 'rgb(0, 122, 255)',
        background: Theme.background[1],
        card: 'rgb(255, 255, 255)',
        text: '#0d0d0d',
        border: 'rgb(216, 216, 216)',
        notification: 'rgb(255, 59, 48)',
    },
};

export const options = {
    stack: {
        headerShown: false,
    },
    tab: {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            display: 'flex',
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            height: Platform.OS === 'ios' ? 70 : 50,
            marginTop: Platform.OS === 'ios' ? 15 : 5,
            paddingTop: 2,
            elevation: 0,
            shadowOpacity: 0,
        },
    },
};
