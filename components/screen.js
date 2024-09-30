/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import Screen from './components/Screem';

import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import {}

const LoginScreen = (
{navigation}
) => {
  const [infoname, setInfoname] = useState('');
const [infopw, setInfopw] = useState('');
 
  const handleSubmit = async() => {
    const response = await fetch('http://localhost:3000/api/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: infoname,
        password: infopw
      }), // Send the data to the backend
    });


      navigation.navigate('Homescreen');  // Use navigation prop to navigate
    
  }

  return (
   
      <View style = {styles.container}>
  <TextInput
        style={styles.textDesign}
       value = {infoname}
        placeholder="Enter your name here"
        onChangeText={setInfoname}
      />
      <TextInput
        style={styles.textDesign}
        value = {infopw}
        placeholder="Enter your pw here"
        onChangeText={setInfopw}
      />
           <Button style={styles.button} mode="contained"onPress={() => handleSubmit()}>
    LOG IN
  </Button>
    </View>
    
    
  )
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'yellow',
  paddingTop: 40,
 },
 button: {
  marginTop: 20,
 },

 textDesign: {
  width: 200,                 // Fixed width
  height: 40,
  marginTop: 20,
   fontSize: 15,
   backgroundColor: 'lightblue',
   borderRadius: 15, 
  borderColor: 'black',
  borderStyle: 'solid',
  borderWidth: 1
  
 },
 text: {
  marginTop: 50,   
   padding: 10,
  fontSize: 15,
 },


})
export default LoginScreen;