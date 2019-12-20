import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Button} from 'react-native';

export default function App() {
  const [userName, setUserName]=useState('')
  const[password,setPassword]=useState('')


   const submit=()=>{
     console.log(userName,password)
  if(userName==='aca'&& password==='123') 
  {
    setUserName('')
    setPassword('')
    console.log('correct')
  }
  
  else {
    setUserName('')
    setPassword('')
    console.log('incorect')
  }
   }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
         placeholder='Username'
         style={styles.input}
         onChangeText={setUserName}
         value={userName}
          />
             <TextInput
         placeholder='Password'
         style={styles.input}
         onChangeText={setPassword}
         secureTextEntry={true}
         value={password}
          />
          <View style={styles.button}>
          <Button  
          color="#52B266" 
          title='Log in'
           onPress={submit}/>
          </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
screen:{
  padding:50,
},
inputContainer:{
  marginTop:'30%',
  alignItems:'center', 

  height:50
},
input:{
  marginTop:'10%',
width:'80%',
 borderColor:'black',
 borderWidth:1, 
 padding:10 
},
button:{
  marginTop:'10%',
  padding:20
}
});
