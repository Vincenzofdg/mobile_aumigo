import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar, Platform } from 'react-native';
// Stack Components
import CoverScreen from './Screens/Cover';

const Stack = createStackNavigator();

const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f8f8ff',
    text: 'white'
  }
}

export default function App() {
  const options = {
    headerShown: false,
  };

  return (
    <NavigationContainer theme={mainTheme}>
      <StatusBar barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"} backgroundColor="black" />
      <Stack.Navigator screenOptions={options} initialRouteName='Cover'>
        <Stack.Screen name="Cover" component={CoverScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}