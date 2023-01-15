import React from 'react';
import { StyleSheet, Text, View, SafeAreaView , Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";

const Profile = ({navigation}) => {
  return (

    /*<LinearGradient 
          colors={["#B9E0FF", "#C4FFF8"]}
          start={[0.1, 0.1]}
          style={styles.linearGradient}> */

    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>User Profile</Text> 
      <Image source={require("../assets/logo4.png")} style={styles.logo}/>

      <View style={styles.allInputsContainer}>
        <View style={styles.inputContainer}>
          <Icon name="user" style={styles.icon}/>
          <TextInput style={styles.input}
              placeholder="Name"
              autoCorrect={false}
            />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="globe" style={styles.icon} />
          <TextInput style={styles.input}
              placeholder="Country"
              autoCorrect={false}
            />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="car" style={styles.icon} />
          <TextInput style={styles.input}
              placeholder="Vehicle Make"
              autoCorrect={false}
            />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="wrench" style={styles.icon} />
          <TextInput style={styles.input}
              placeholder="Vehicle Model"
              autoCorrect={false}
            />
        </View>
        </View>
    </SafeAreaView>
   // </LinearGradient>

  )
}

export default Profile;

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

  title: {
    color: "steelblue",
    fontSize: "40",
    position: 'absolute',
    top: 270
  },

  allInputsContainer: {
    position: 'absolute',
    top: 330, 
  },

  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 10,
    paddingTop: 30,
    width: 250
  },

  logo:{
    flex: 1,
    position: 'absolute',
    top: 150,
    width: 80,
    height: 135,
    resizeMode: 'contain'
  },

  input: {
    flex: 1,
    paddingLeft: 10,
  },

  icon: {
    color: 'ECECEC',
    fontSize: 20,
  }
});
