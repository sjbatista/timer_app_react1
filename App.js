import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function App() {

const [initialState, setInitialState] = useState('start');

const [seconds, setSeconds] = useState(0);
const [minutes, setMinutes] = useState(0);
const [hours, setHours] = useState(0);

const [alarmSound, setAlarmSound] = useState([
  {
    id:1,
    selected: true,
    song: 'Sound 1',
    file: 'alarm1.mp3',
  },
  
  {
    id:2,
    selected: false,
    song: 'Sound 2',
    file: 'alarm2.mp3',
  },

  {
    id:3,
    selected: false,
    song: 'Sound 3',
    file: 'alarm3.mp3',
  }

]);

setAlarmClick = (id) => {
 
  let alarmsTemp = alarmSound.map(function(val){
    if(id != val.id){
      val.selected = false;
    }else{
      val.selected = true;
    }
    
    return val;
 })

 setAlarmSound(alarmsTemp);
 
}
  
var numbers = [];
for(var i=1; i<=60;i++){
  numbers.push(i);
}

if(initialState == 'start'){
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

      <Text style={{color:'white', fontSize:25 }}>Select time interval:</Text>

      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      
        <Text style={{color:'white', fontSize:12}}>Hours</Text>
        <Picker style={{color:'white', height:50,width:95, textAlign:'right'}} selectedValue={hours} onValueChange={(itemValue, itemIndex) => setHours(itemValue)}>
          <Picker.Item label="0" value="0" />
            {
              numbers.map(function(val){
                return(<Picker.Item label={val.toString()} value={val.toString()} />);
              })
            } 
        </Picker>

        <Text style={{color:'white', fontSize:12}}>Minutes</Text>
        <Picker style={{color:'white', height:50,width:95}} selectedValue={minutes} onValueChange={(itemValue, itemIndex) => setMinutes(itemValue)}>
           <Picker.Item label="0" value="0" />
            {
              numbers.map(function(val){
                return(<Picker.Item label={val.toString()} value={val.toString()} />);
              })
            }
        </Picker>

        <Text style={{color:'white', fontSize:12}}>Seconds</Text>
        <Picker style={{color:'white', height:50,width:95}} selectedValue={seconds} onValueChange={(itemValue, itemIndex) => setSeconds(itemValue)}>
            <Picker.Item label="0" value="0" />
            {
              numbers.map(function(val){
                return(<Picker.Item label={val.toString()} value={val.toString()} />);
              })
            }
        </Picker>
      
      </View>

      <View style={{flexDirection:'row', paddingTop:18}}>
        {

          alarmSound.map(function(val){
            if(val.selected == true){

              return(<TouchableOpacity onPress={()=> setAlarmClick(val.id)} style={styles.btnSelected}><Text style={{color:'white'}}>{val.song}</Text></TouchableOpacity>);
            }
            else{
              return(<TouchableOpacity onPress={()=> setAlarmClick(val.id)} style={styles.btnChose}><Text style={{color:'white'}}>{val.song}</Text></TouchableOpacity>);
            }
          })
        }
        
      </View>

      <TouchableOpacity onPress={() => setInitialState('initiated')} style={{alignItems:'center', paddingTop:18}}><MaterialCommunityIcons name="play-box-outline" size={70} color="white" /><Text style={{textAlignVertical:'top', color:'white'}}>START</Text></TouchableOpacity>

    </View>
  );
}else if(initialState == 'initiated'){
  
  return(
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
  
}


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
