import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import HomeScreen from './Screens/Home';

const App = () => {
  return (
   <View  style={{backgroundColor:'white', flex:1, margin:0, padding:0}}>
    <HomeScreen/>
   </View>
  )
}

export default App;
