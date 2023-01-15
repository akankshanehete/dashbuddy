import React from 'react';
import {useState} from 'react';

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";


import Home from "./screens/HomeScreen";

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors, 
    background: "transparent"

  }
}

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName = "Home">
        <Stack.Screen name = 'Home' component = {Home} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; 


