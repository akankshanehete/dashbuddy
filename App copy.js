import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView , Image} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  console.log("App Executed");

  return (
    // container component for grouping or laying out children
    <LinearGradient 
          colors={["#B9E0FF", "#C4FFF8"]}
          start={[0.1, 0.1]}
          style={styles.linearGradient}>
    <Image source={require("./assets/logo4.png")} style={styles.logo} />
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.steelblue}>DashBuddy</Text> 
      
      <StatusBar style="auto" />
      

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