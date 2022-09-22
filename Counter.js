import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'; 
import { Audio } from 'expo-av';

export default function Counter(props) {

    var done = false;

    useEffect(() =>{

        const timer = setInterval(()=>{ 
            props.setSeconds(props.seconds-1);

            if(props.seconds <= 0){
                if(props.minutes > 0){
                    props.setMinutes(props.minutes-1);
                    props.setSeconds(59);}
                    else if(props.hours > 0){
                        props.setHours(props.hours-1);
                        props.setMinutes(59);
                        props.setSeconds(59); 
                    }else{
                        if(!done){
                            done = true;
                            playSound();
                            props.setSeconds(0);
                            props.setMinutes(0);
                            props.setHours(0);
                            alert('Finish !');
                            props.setStateOne('select');
                        } 
                    }   
                } 
        },1000)

        return() => clearInterval(timer);

    })

    async function playSound(){
      const soundObject = new Audio.Sound();
        try {
          var soundOk;
          props.alarms.map(function(val){
            if(val.selected == true){
              soundOk = val.file;
            }
          })
          await soundObject.loadAsync(soundOk);
          await soundObject.playAsync();
         
          //await soundObject.unloadAsync();
        } catch (error) {
          // An error occurred!
        }
    }

   reset = () => {
       props.setSeconds(0);
       props.setMinutes(0);
       props.setHours(0);
       props.setStateOne('select');

   } 

   formatNumber = (number) => {
      var finalNumber = "";
      
      if(number < 10){
        finalNumber = "0"+number;
      }else{
        finalNumber = number;
      }
      
      return finalNumber;
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

      <View style={{flexDirection:'row', marginTop:15}}>
        <Text style={{color:'white', fontSize:18}}>{formatNumber(props.hours)}</Text>
        <Text style={{color:'white', fontSize:18, paddingStart:5, paddingEnd:5}}>:</Text>
        <Text style={{color:'white', fontSize:18}}>{formatNumber(props.minutes)}</Text>
        <Text style={{color:'white', fontSize:18, paddingStart:5, paddingEnd:5}}>:</Text>
        <Text style={{color:'white', fontSize:18}}>{formatNumber(props.seconds)}</Text>
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
