import React from 'react';
import { StyleSheet, Text, View, SafeAreaView , Image, FlatList} from 'react-native';
import Information from "./Information";


//for camera
import { Camera, CameraType} from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import { useState, useEffect, useRef } from 'react';
import Button from '../components/Button';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Camerap from './Camera';



const CameraStack = () => {
const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }} >
    <Stack.Screen
    name="Camera"
    component={Camerap}
    options={{ title: 'Camera' }}
  />
   <Stack.Screen
    name="Information"
    component={Information}
    options={{ title: 'Information' }}
  />
   </Stack.Navigator>
  )
}

export default CameraStack;