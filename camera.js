import React from 'react';
import { StyleSheet, Text, View, SafeAreaView , Image} from 'react-native';

//for camera
import { Camera, CameraType} from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import { useState, useEffect } from 'react';

export default function App() {
  console.log("App Executed");
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setimage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraref = useRef(null);

  useEffect(() => {
    (async() => {
      MediaLibrary.requestPermissionsAsync(); // ask for perms to use media lib 
      const cameraStatus = await Camera.requestCameraPermissionsAsync(); // ask to use camera
      setHasCameraPermission(cameraStatus.status == 'granted');
    })
  })();
  return (

    <View style={styles.container}>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // container is flexible
    backgroundColor: 'B9E0FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  

});
