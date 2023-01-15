import React from 'react';
import {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Animated, Dimensions} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";


//screen names importing
import Tabs from './navigation/tabs';
import Default from './screens/Default';
import Camerap from './screens/Camera';
import CameraStack from './screens/CameraStack';
import History from './screens/History';
import Located from './screens/Located';
import Profile from './screens/Profile';
import HomeScreen from './screens/HomeScreen'

import Home from "./screens/HomeScreen";
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

//icons for navbar
import { FontAwesome5 } from '@expo/vector-icons';
import {useRef} from 'react';


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
   // Animated Tab Indicator...
   const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
     
      <Tab.Navigator initialRouteName='Home'  screenOptions = {tabbarstyle} >
      <Tab.Screen name={"History"} component={History} options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 9
            }}>
              <FontAwesome5
                name="clock" 
                size={20}
                color={focused ? "steelblue" : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
      <Tab.Screen name={"Home"} component={HomeScreen} options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 9
            }}>
              <FontAwesome5
                name="home"
                size={20}
                color={focused ? "steelblue" : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
         <Tab.Screen name={"Camera"} component={CameraStack} options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 9
            }}>
              <FontAwesome5
                name="camera"
                size={20}
                color={focused ? "steelblue" : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name={"Location"} component={Located} options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 9
            }}>
              <FontAwesome5
                name="search" 
                size={20}
                color={focused ? "steelblue" : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        
        
        <Tab.Screen name={"Profile"} component={Profile} options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 9
            }}>
              <FontAwesome5
                name="car" 
                size={20}
                color={focused ? "steelblue" : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

      </Tab.Navigator>
     
      {/* <Animated.View style={{
        width: getWidth() - 20,
        height: 2,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 98,
        // Horizontal Padding = 20...
        left: 50,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View> */}

    </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width

  // Horizontal Padding = 20...
  width = width - 80

  // Total five Tabs...
  return width / 5
}

const tabbarstyle ={
  tabBarShowLabel: false,
  tabBarStyle:{paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:'white',
    position:'absolute',
    height:70}
}

export default App; 


