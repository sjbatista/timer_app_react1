import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'; 
import App from './App';

export default function Counter(props) {

   reset = () => {
    props.setStateOne('select');
   } 

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(59,29,105,2.8)', 'rgba(59,29,105,0.7)']}
        style={{
          position:'absolute',
          left:0,
          right:0,
          top:0,
          height:'100%',
        }}
      />

      <Text style={{color:'white', fontSize:25 }}>Counting</Text>

      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:15}}>
      
        <Text style={{color:'white', fontSize:18}}>{props.hours}</Text>
        <Text style={{color:'white', fontSize:18, paddingStart:5, paddingEnd:5}}>:</Text>
        <Text style={{color:'white', fontSize:18}}>{props.minutes}</Text>
        <Text style={{color:'white', fontSize:18, paddingStart:5, paddingEnd:5}}>:</Text>
        <Text style={{color:'white', fontSize:18}}>{props.seconds}</Text>
        
      
      </View>


      <TouchableOpacity onPress={() => reset()} style={{alignItems:'center', paddingTop:18}}><Feather name="stop-circle" size={70} color="white" /><Text style={{textAlignVertical:'top', color:'white'}}>STOP</Text></TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnChose: {
  marginRight:10,
  padding:10,
  backgroundColor:'rgb(116,67,191)'
  },

  btnSelected: {
    marginRight:10,
    padding:10,
    backgroundColor:'rgba(116,67,191,0.2)',
    borderColor:'white',
    borderWidth:1
  
    }
});
