import React from 'react';
import {StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Profile, Explore, DataSet} from '../Screens/';
import navigationScreens from './navigationScreens';
const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={navigationScreens.HOME} screenOptions={{headerShown:false}}>
        <Stack.Screen options={{title:'My Home'}} name={navigationScreens.HOME} component={Home} />
        <Stack.Screen name={navigationScreens.PROFILE} component={Profile} />  
         <Stack.Screen name={navigationScreens.EXPLORE} component={Explore} />
         <Stack.Screen name={navigationScreens.DATA} component={DataSet}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    color: 'cyan',
    backgroundColor: 'black',
  },
});

export default Routes;
