import React from 'react';
import {useState} from 'react';

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";

//screen names importing
import Tabs from './navigation/tabs';
import Default from './screens/Default';
import Camerap from './screens/Camera';
import History from './screens/History';
import Located from './screens/Located';
import Profile from './screens/Profile';
import HomeScreen from './screens/HomeScreen'

import Home from "./screens/HomeScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
      <Tab.Navigator initialRouteName='Home'>

        <Tab.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name='Location' component={Located} options={{headerShown: false}}/>
        <Tab.Screen name='Profile' component={Profile} options={{headerShown: false}}/>
        <Tab.Screen name='Camera' component={Camerap} options={{headerShown: false}}/>

      </Tab.Navigator>

    </NavigationContainer>
  );
}

export default App; 


