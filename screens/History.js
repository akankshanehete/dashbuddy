import React from 'react'
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView, ScrollView } from 'react-native';
const { width, height } = Dimensions.get('screen');

const History = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <SafeAreaView style={{borderBottomColor:'#8d99ae', borderBottomWidth:1}}>
        <Text style={{fontSize: 35, fontWeight:'500', paddingLeft:15,  fontFamily: 'Yatra-One', color:'steelblue'}}>All History</Text>

      </SafeAreaView>
        <ScrollView contentContainerStyle={{padding: 5, paddingTop: 15 }} style={{backgroundColor:"#98c1d9"}}>

          <SafeAreaView style={{flexDirection:'row', padding: 20, marginBottom:20, justifyContent: 'center', 
            backgroundColor:'white', 
            borderRadius:12, 
            shadowColor:'#000', 
            shadowOffset:{
              width:1,
              height:10
            },
            shadowOpacity:0.3,
            shaddowRadius:100}}>
            <Image source={require("../assets/chk.jpg")} style={{ width:100, height: 100, borderRadius: 20, margin:10}} />
            <View style={{marginLeft:15, marginTop:10}}>
              <Text style={{fontSize: 18}}>ID: 40825</Text>
              <Text style={{fontSize: 18}}>Checked On: 2022/12/03</Text>
              <Text style={{fontSize: 18}}>Type: Check Engine Warning</Text>
              <Text style={{fontSize: 20, fontStyle: 'italic', fontStyle: "italic", fontWeight: "700"}}>See Details ➤ </Text>
            </View>
          </SafeAreaView>

          <SafeAreaView style={{flexDirection:'row', padding: 20, marginBottom:20, justifyContent: 'center', 
            backgroundColor:'white', 
            borderRadius:12, 
            shadowColor:'#000', 
            shadowOffset:{
              width:1,
              height:10
            },
            shadowOpacity:0.3,
            shaddowRadius:100}}>
            <Image source={require("../assets/tire1.jpg")} style={{ width:100, height: 100, borderRadius: 20, margin:10}} />
            <View style={{marginLeft:15, marginTop:10}}>
              <Text style={{fontSize: 18}}>ID: 40824</Text>
              <Text style={{fontSize: 18}}>Checked On: 2022/11/09</Text>
              <Text style={{fontSize: 18}}>Type: Tire Pressure Warning</Text>
              <Text style={{fontSize: 20, fontStyle: 'italic',  fontStyle: "italic", fontWeight: "700"}}>See Details ➤ </Text>
            </View>
          </SafeAreaView>

          <SafeAreaView style={{flexDirection:'row', padding: 20, marginBottom:20, justifyContent: 'center', 
            backgroundColor:'white', 
            borderRadius:12, 
            shadowColor:'#000', 
            shadowOffset:{
              width:1,
              height:10
            },
            shadowOpacity:0.3,
            shaddowRadius:100}}>
            <Image source={require("../assets/chk.jpg")} style={{ width:100, height: 100, borderRadius: 20, margin:10}} />
            <View style={{marginLeft:15, marginTop:10}}>
              <Text style={{fontSize: 18}}>ID: 40823</Text>
              <Text style={{fontSize: 18}}>Checked On: 2022/10/26</Text>
              <Text style={{fontSize: 18}}>Type: Check Engine Warning</Text>
              <Text style={{fontSize: 20, fontStyle: 'italic',  fontStyle: "italic", fontWeight: "700"}}>See Details ➤ </Text>
            </View>
          </SafeAreaView>

          <SafeAreaView style={{flexDirection:'row', padding: 20, marginBottom:20, justifyContent: 'center', 
            backgroundColor:'white', 
            borderRadius:12, 
            shadowColor:'#000', 
            shadowOffset:{
              width:1,
              height:10
            },
            shadowOpacity:0.3,
            shaddowRadius:100}}>
            <Image source={require("../assets/tire1.jpg")} style={{ width:100, height: 100, borderRadius: 20, margin:10}} />
            <View style={{marginLeft:15, marginTop:10}}>
              <Text style={{fontSize: 18}}>ID: 40822</Text>
              <Text style={{fontSize: 18}}>Checked On: 2022/09/17</Text>
              <Text style={{fontSize: 18}}>Type: Tire Pressure Warning</Text>
              <Text style={{fontSize: 20, fontStyle: 'italic', fontStyle: "italic", fontWeight: "700"}}>See Details ➤ </Text>
            </View>
          </SafeAreaView>

          <SafeAreaView style={{flexDirection:'row', padding: 20, marginBottom:20, justifyContent: 'center', 
            backgroundColor:'white', 
            borderRadius:12, 
            shadowColor:'#000', 
            shadowOffset:{
              width:1,
              height:10
            },
            shadowOpacity:0.3,
            shaddowRadius:100}}>
            <Image source={require("../assets/tire1.jpg")} style={{ width:100, height: 100, borderRadius: 20, margin:10}} />
            <View style={{marginLeft:15, marginTop:10}}>
              <Text style={{fontSize: 18}}>ID: 40821</Text>
              <Text style={{fontSize: 18}}>Checked On: 2022/08/11</Text>
              <Text style={{fontSize: 18}}>Type: Tire Pressure Warning</Text>
              <Text style={{fontSize: 20, fontStyle: 'italic', fontStyle: "italic", fontWeight: "700"}}>See Details ➤ </Text>
            </View>
          </SafeAreaView>

          <SafeAreaView style={{flexDirection:'row', padding: 20, marginBottom:20, justifyContent: 'center', 
            backgroundColor:'white', 
            borderRadius:12, 
            shadowColor:'#000', 
            shadowOffset:{
              width:1,
              height:10
            },
            shadowOpacity:0.3,
            shaddowRadius:100}}>
            <Image source={require("../assets/chk.jpg")} style={{ width:100, height: 100, borderRadius: 20, margin:10}} />
            <View style={{marginLeft:15, marginTop:10}}>
              <Text style={{fontSize: 18}}>ID: 40820</Text>
              <Text style={{fontSize: 18}}>Checked On: 2022/07/19</Text>
              <Text style={{fontSize: 18}}>Type: Check Engine Warning</Text>
              <Text style={{fontSize: 20, fontStyle: 'italic', fontStyle: "italic", fontWeight: "700"}}>See Details ➤ </Text>
            </View>
          </SafeAreaView>

          <SafeAreaView style={{flexDirection:'row', padding: 20, marginBottom:20, justifyContent: 'center', 
            backgroundColor:'white', 
            borderRadius:12, 
            shadowColor:'#000', 
            shadowOffset:{
              width:1,
              height:10
            },
            shadowOpacity:0.3,
            shaddowRadius:100}}>
            <Image source={require("../assets/chk.jpg")} style={{ width:100, height: 100, borderRadius: 20, margin:10}} />
            <View style={{marginLeft:15, marginTop:10}}>
              <Text style={{fontSize: 18}}>ID: 40819</Text>
              <Text style={{fontSize: 18}}>Checked On: 2022/06/21</Text>
              <Text style={{fontSize: 18}}>Type: Check Engine Warning</Text>
              <Text style={{fontSize: 20, fontStyle: 'italic', fontStyle: "italic", fontWeight: "700"}}>See Details ➤ </Text>
            </View>
          </SafeAreaView>

          <SafeAreaView style={{flexDirection:'row', padding: 20, marginBottom:20, justifyContent: 'center', 
            backgroundColor:'white', 
            borderRadius:12, 
            shadowColor:'#000', 
            shadowOffset:{
              width:1,
              height:10
            },
            shadowOpacity:0.3,
            shaddowRadius:100}}>
            <Image source={require("../assets/tire1.jpg")} style={{ width:100, height: 100, borderRadius: 20, margin:10}} />
            <View style={{marginLeft:15, marginTop:10}}>
              <Text style={{fontSize: 18}}>ID: 40818</Text>
              <Text style={{fontSize: 18}}>Checked On: 2022/05/01</Text>
              <Text style={{fontSize: 18}}>Type: Tire Pressure Warning</Text>
              <Text style={{fontSize: 20, fontStyle: 'italic', fontStyle: "italic", fontWeight: "700"}}>See Details ➤ </Text>
            </View>
          </SafeAreaView>
          
        </ScrollView>
    </SafeAreaView>
  )
}
  


export default History