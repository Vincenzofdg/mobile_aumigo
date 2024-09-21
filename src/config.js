import { DefaultTheme } from '@react-navigation/native';

export const theme = {
     ...DefaultTheme,
     colors: {
          ...DefaultTheme.colors,
          background: '#f8f8ff',
          text: 'white'
     }
}

export const options = {
     headerShown: false,
};