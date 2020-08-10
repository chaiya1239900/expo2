import React from 'react';
import {Text,View,StyleSheet,Linking}from 'react-native';

export default function App(){
  return(
<View style={styles.container}>
    <Text style={styles.myContent} 
    onPress={() =>Linking.openURL('https://twitter.com/')}>#อีสานบ่อยับ</Text>

    <Text style={styles.myContent}
    onPress={() =>Linking.openURL('https://twitter.com/')}>>#เยาวชนปลดแอก</Text>
    <Text style={{color:'blue'}} 
    onPress={()  =>Linking.openURL('http://google.com')}>Google </Text>   
</View>
    )
  }
const styles=StyleSheet.create({
container:{
 flex:1,
 alignItems:'center',
 justifyContent:'center',
 backgroundColor:'#FA8072'
},
myContent:{
fontSize:20,
  color:'#808080',
}
})