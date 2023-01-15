import React from 'react';
import { StyleSheet, Text, View, SafeAreaView , Image, FlatList} from 'react-native';

//for camera 
//for camera
import { Camera, CameraType} from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import { useState, useEffect, useRef } from 'react';
import Button from '../components/Button';

const Camerap = ({navigation}) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  // ask for permissions first 
  useEffect(() => {
    (async() => {
      MediaLibrary.requestPermissionsAsync(); // ask for perms to use media lib 
      const cameraStatus = await Camera.requestCameraPermissionsAsync(); // ask to use camera
      setHasCameraPermission(cameraStatus.status == 'granted');
    })();
  }, [])

  const saveImage = async () => {
    if(image){
      try{
        await MediaLibrary.createAssetAsync(image);
        alert("Picture Saved to Photos.");
        setImage(null);
      }catch(e){
        console.log(e)
      }
    }
  }


  const takePicture = async() => {
    if(cameraRef){
      try{
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      }catch(e){
        console.log(e)
      }
    }
  }

  if(hasCameraPermission == false){
    return <Text>No Access To Camera</Text>
  }
  
  return (
    <View style={styles.container}>
      {!image ? 
        <Camera 
          style={styles.camera}
          type={type}
          flashMode = {flash}
          ref={cameraRef}
        >
          <View style={{
            flexDirection:'row',
            justifyContent: 'space-between',
            padding: 30,

          }}>
            <Button icon={'retweet'} onPress={()=>{
              setType(type === CameraType.back ? CameraType.front : CameraType.back)
            }}/>
            <Button icon={'flash'} 
            color = {flash === Camera.Constants.FlashMode.off ? 'gray' : '#f1f1f1'}
            onPress = {()=>{
              setFlash(flash === Camera.Constants.FlashMode.off 
                ? Camera.Constants.FlashMode.on 
                : Camera.Constants.FlashMode.off)
          }}/>
          </View>
        </Camera> 
        :
        <Image source={{uri:image}} style={styles.camera}/>
      }
        
      <View>
        {image ?
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal:60
        }}>
          <Button title={'Re-take'} icon='retweet' onPress={()=> setImage(null)} />
          <Button title={'Save'} icon='check' onPress={saveImage}/>
        </View>
        :
        <Button title={'Take A Picture'} icon='camera' onPress={takePicture}/>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // container is flexible
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingBottom:50,
  },

  camera: {
    flex:1,
    borderRadius:20,

  }
});

export default Camerap;