import React from 'react';
import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView , Image, FlatList} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Entypo from 'react-native-vector-icons/Entypo';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Camera from './Camera';
import Located from './Located';
import Profile from './Profile';
import History from './History';
import Default from './Default';



const Home = () => {
  console.log("App Executed");
  const Tab = createBottomTabNavigator();

  return (
    // container component for grouping or laying out children

    <LinearGradient 
          colors={["#B9E0FF", "#C4FFF8"]}
          start={[0.1, 0.1]}
          style={styles.linearGradient}>
    <StatusBar style="auto" />
    <Image source={require("../assets/logo4.png")} style={styles.logo} />
    
    <SafeAreaView style={styles.container}>
      
    <Text style={styles.steelblue}>DashBuddy</Text> 

    </SafeAreaView>
    </LinearGradient>
    

    
  
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // container is flexible
    backgroundColor: 'B9E0FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center'
  },

  steelblue: {
    color: "steelblue",
    fontSize: "40",
    position: 'absolute',
    top: 450
  },

  logo:{
    flex: 1,
    position: 'absolute',
    top: 250,
    width: 150,
    height: 250,
    resizeMode: 'contain'
    
  }
});

export default Home;