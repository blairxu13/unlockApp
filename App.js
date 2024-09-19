/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import LoginScreen from './components/screen.js';

import React from 'react';

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

const App = () => {
  return (
    <LoginScreen/>
  )
}
export default App;