import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';
import {Picker} from '@react-native-picker/picker';

export default function App() {

const [seconds, setSeconds] = useState(0);
const [minutes, setMinutes] = useState(0);
const [hours, setHours] = useState(0);

const [alarmSound, setAlarmSound] = useState([
  {
    selected: true,
    song: 'alarm 1',
    file: 'alarm1.mp3',
  },
  
  {
    selected: false,
    song: 'alarm 2',
    file: 'alarm2.mp3',
  }

]);
  
var numbers = [];
for(var i=1; i<=60;i++){
  numbers.push(i);
}


  return (
    <View style={styles.container}>

      <Text style={{color:'white', fontSize:25 }}>Select time interval:</Text>

      <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
      
        <Text style={{color:'white'}}>H</Text>
        <Picker style={{color:'white', height:50,width:100}} selectedValue={hours} onValueChange={(itemValue, itemIndex) => setHours(itemValue)}>
          <Picker.Item label="0" value="0" />
            {
              numbers.map(function(val){
                return(<Picker.Item label={val.toString()} value={val.toString()} />);
              })
            } 
        </Picker>

        <Text style={{color:'white'}}>M</Text>
        <Picker style={{color:'white', height:50,width:100}} selectedValue={minutes} onValueChange={(itemValue, itemIndex) => setMinutes(itemValue)}>
           <Picker.Item label="0" value="0" />
            {
              numbers.map(function(val){
                return(<Picker.Item label={val.toString()} value={val.toString()} />);
              })
            }
        </Picker>

        <Text style={{color:'white'}}>S</Text>
        <Picker style={{color:'white', height:50,width:100}} selectedValue={seconds} onValueChange={(itemValue, itemIndex) => setSeconds(itemValue)}>
            <Picker.Item label="0" value="0" />
            {
              numbers.map(function(val){
                return(<Picker.Item label={val.toString()} value={val.toString()} />);
              })
            }
        </Picker>
      
      </View>

      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(80,50,168)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
