import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Nav</Text>
    </View>
  );
}
function Btn(){
  return(
    <View>
    <Button title='click'></Button>
    </View>
  );
}
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      {/* <Stack.Navigator initialRouteName="Button">
        <Stack.Screen name="Button" component={Btn} />
      </Stack.Navigator>
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;

