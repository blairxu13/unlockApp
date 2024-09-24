/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import LoginScreen from './components/screen.js';
// import HomeScreen from './components/homescreen.js';  
import Navigator from './components/homeStack.js';  
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
const Stack = createStackNavigator();
const App = () => {
  return (
    // <Navigator/>
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
        
           <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
       </Stack.Navigator>
   
    </NavigationContainer>
  )
}
export default App;