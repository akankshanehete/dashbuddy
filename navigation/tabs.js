import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Default from '../screens/Default';
import Camera from '../screens/Camera';
import History from '../screens/History';
import Located from '../screens/Located';
import Profile from '../screens/Profile';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator;

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>

        <Tab.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name='Location' component={Located} options={{headerShown: false}}/>
        <Tab.Screen name='Profile' component={Profile} options={{headerShown: false}}/>
        <Tab.Screen name='Camera' component={Camera} options={{headerShown: false}}/>

      </Tab.Navigator>
  )
}

export default Tabs;