import React from 'react'
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView, ScrollView } from 'react-native';
const { width, height } = Dimensions.get('screen');

const Located = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <SafeAreaView style={{borderBottomColor:'#8d99ae', borderBottomWidth:1}}>
        <Text style={{fontSize: 35, fontWeight:'500', paddingLeft:15,  fontFamily: 'Yatra-One', color:'steelblue'}}> Mechanics Near Me</Text>

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
            <Image source={{uri: "https://www.google.com/maps/uv?pb=!1s0x882c9bfaed08b281:0xe0746fc0a9200241!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipMfUN8VEu6TyY2G_jC2-R9kjARwwuEr0WC6mbmU%3Dw520-h350-n-k-no!5smechanics+near+me+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipMfUN8VEu6TyY2G_jC2-R9kjARwwuEr0WC6mbmU&hl=en&sa=X&ved=2ahUKEwiSh4ez8cn8AhVTlYkEHdpBCD0Q7ZgBKAB6BAgdEAI"}} style={{ width:100, height: 100, borderRadius: 20, margin:10}} />
            <View style={{marginLeft:15, marginTop:10}}>
              <Text style={{fontSize: 18}}>Chestnut Avenue Auto ... </Text>
              <Text style={{fontSize: 18}}>Address: 43 Chestnut Ave</Text>
              <Text style={{fontSize: 18}}>Phone: (905) 312-0112</Text>
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
            <Image source={{uri: "https://www.google.com/maps/uv?pb=!1s0x882c9d2c5a9e4623:0x5231dce54ab00ab1!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipNhYK7oNjfosBaeQ94SKkLgO5tHKSlVXjVqLylB%3Dw520-h350-n-k-no!5smechanics+near+me+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipNhYK7oNjfosBaeQ94SKkLgO5tHKSlVXjVqLylB&hl=en&sa=X&ved=2ahUKEwiXyLi78cn8AhXokYkEHc8fDXcQ7ZgBKAB6BAgcEAI"}} style={{ width:100, height: 100, borderRadius: 20, margin:10}} />
            <View style={{marginLeft:15, marginTop:10}}>
              <Text style={{fontSize: 18}}> Waterdown Collision </Text>
              <Text style={{fontSize: 18}}>Address: 24 Dundas St E</Text>
              <Text style={{fontSize: 18}}>Phone: (905) 689-8262 </Text>
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
            <Image source={{uri: "https://www.google.com/maps/uv?pb=!1s0x882c9b4d092d56d1:0xff5de679d6fc764b!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipP-d9QOeFbWJgGQryc056aJGK64lY3vd3R931Gf%3Dw520-h350-n-k-no!5smechanics+near+me+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipP-d9QOeFbWJgGQryc056aJGK64lY3vd3R931Gf&hl=en&sa=X&ved=2ahUKEwi38MHI8sn8AhUwkYkEHcw-B4MQ7ZgBKAB6BAgZEAI"}} style={{ width:100, height: 100, borderRadius: 20, margin:10}} />
            <View style={{marginLeft:15, marginTop:10}}>
              <Text style={{fontSize: 18}}>Active Green+Ross Tire ... </Text>
              <Text style={{fontSize: 18}}>Address: 1289 Main St W </Text>
              <Text style={{fontSize: 18}}>Phone: (905) 523-4323 </Text>
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
            <Image source={{uri: "https://www.google.com/maps/uv?pb=!1s0x882c84ba168fac4b:0xd9c5bda7135b719a!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipP9VfYSh_9r5aXkyfg-LKehAmiE_VsbDH1dm5NH%3Dw520-h350-n-k-no!5smechanics+near+me+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipP9VfYSh_9r5aXkyfg-LKehAmiE_VsbDH1dm5NH&hl=en&sa=X&ved=2ahUKEwj415LQ8sn8AhXokYkEHXJ5AngQ7ZgBKAB6BAgYEAI"}} style={{ width:100, height: 100, borderRadius: 20, margin:10}} />
            <View style={{marginLeft:15, marginTop:10}}>
              <Text style={{fontSize: 18}}>Westdale Car Service </Text>
              <Text style={{fontSize: 18}}>Address: 1872 Main St W</Text>
              <Text style={{fontSize: 18}}>Phone: (905) 523-1388</Text>
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
            <Image source={{uri: 'https://www.google.com/maps/uv?pb=!1s0x882c9b20da009f09:0xc1c1551eb202f31a!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipNRd_YzIAcENNXZrCsBPOF6yt6vGMuzmP0Hlwg%3Dw346-h350-n-k-no!5smechanics+near+me+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipNRd_YzIAcENNXZrCsBPOF6yt6vGMuzmP0Hlwg&hl=en&sa=X&ved=2ahUKEwjl2ZTA9Mn8AhVulIkEHWSqAukQ7ZgBKAB6BAgWEAI'}} style={{ width:100, height: 100, borderRadius: 20, margin:10}} />
            <View style={{marginLeft:15, marginTop:10}}>
              <Text style={{fontSize: 18}}>M & B Auto Tech Inc. </Text>
              <Text style={{fontSize: 18}}>Address: 1872 Main St W</Text>
              <Text style={{fontSize: 18}}>Phone: (905) 312-0212</Text>
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
            <Image source={{uri: "https://www.google.com/maps/uv?pb=!1s0x882c847e89ed6565:0x7dc39059da7aae97!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipO34xDCOCEeAAV5qgBiP8KkG407QT2Co5hSmYYv%3Dw346-h350-n-k-no!5smechanics+near+me+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipO34xDCOCEeAAV5qgBiP8KkG407QT2Co5hSmYYv&hl=en&sa=X&ved=2ahUKEwi59Pyn9Mn8AhWhjIkEHS5zBaYQ7ZgBKAB6BAgFEAI"}} style={{ width:100, height: 100, borderRadius: 20, margin:10}} />
            <View style={{marginLeft:15, marginTop:10}}>
              <Text style={{fontSize: 18}}>Arrow Automotive Repairs </Text>
              <Text style={{fontSize: 18}}>Address: 200 King St W</Text>
              <Text style={{fontSize: 18}}>Phone: (905) 627-3716 </Text>
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
            <Image source={{uri: "https://www.google.com/maps/uv?pb=!1s0x882c9b6b91f96ed7:0xec82809ad02610a5!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipPSatjk2Bof9I9rldXAcYZPK8QUPCekqhZISo0C%3Dw520-h350-n-k-no!5smechanics+near+me+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipPSatjk2Bof9I9rldXAcYZPK8QUPCekqhZISo0C&hl=en&sa=X&ved=2ahUKEwjc_4jt8sn8AhXjj4kEHcyyBewQ7ZgBKAB6BAgaEAI"}} style={{ width:100, height: 100, borderRadius: 20, margin:10}} />
            <View style={{marginLeft:15, marginTop:10}}>
              <Text style={{fontSize: 18}}>NAPA AUTOPRO </Text>
              <Text style={{fontSize: 18}}>Address: 411 Aberdeen Ave</Text>
              <Text style={{fontSize: 18}}>Phone: (905) 529-0412</Text>
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
            <Image source={{uri: "https://www.google.com/maps/uv?pb=!1s0x882c9b7ac2b08c11:0xee7d5432eaac4b9e!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipNvInaxq0pyg79Cji-VFTRSx9baeReRT53VuN1f%3Dw520-h350-n-k-no!5smechanics+near+me+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipNvInaxq0pyg79Cji-VFTRSx9baeReRT53VuN1f&hl=en&sa=X&ved=2ahUKEwiGwfr28sn8AhXuhYkEHb4VAF0Q7ZgBKAB6BAgSEAI"}} style={{ width:100, height: 100, borderRadius: 20, margin:10}} />
            <View style={{marginLeft:15, marginTop:10}}>
              <Text style={{fontSize: 18}}>Locke St. Tire & Auto... </Text>
              <Text style={{fontSize: 18}}>Address: 87 Locke St S</Text>
              <Text style={{fontSize: 18}}>Phone: (905) 522-8679</Text>
              <Text style={{fontSize: 20, fontStyle: 'italic', fontStyle: "italic", fontWeight: "700"}}>See Details ➤ </Text>
            </View>
          </SafeAreaView>
          
        </ScrollView>
    </SafeAreaView>
  )
}

export default Located;