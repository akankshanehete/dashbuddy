import React from 'react';
import { StyleSheet, Text, View, SafeAreaView , Image, FlatList} from 'react-native';

const Located = ({navigation}) => {
  return (
    <SafeAreaView>
    <Text>Mechanics Near Me</Text>
    </SafeAreaView>
  )
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

export default Located;