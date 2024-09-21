/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import Screen from './components/Screem';

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
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

const LoginScreen = () => {
  return (
   
      <View style = {styles.container}>

 <Text style={styles.text}>slay</Text>
      <Text style={styles.text}>another text</Text>

  <Icon name="lock-open" type="onicon" color="#887700" />
      
      <Button  mode="contained" onPress={() => console.log('Pressed')}>
    Press meee
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
 text: {
  marginTop: 50,   
   padding: 10,
  fontSize: 24,
 },


})
export default LoginScreen;