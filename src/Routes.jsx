import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Platform } from "react-native";
import {theme, options} from "./config";
// Stack Components
import CoverScreen from "./Screens/Cover";
import LogInScreen from "./Screens/LogIn";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"} backgroundColor="black" />
      <Stack.Navigator screenOptions={options} initialRouteName="Cover">
        <Stack.Screen name="Cover" options={{ title: 'Cover' }} component={CoverScreen} />
        <Stack.Screen name="LogIn" options={{ title: 'LogIn' }} component={LogInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}