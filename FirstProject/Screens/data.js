import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import navigationScreens from '../Components/navigationScreens';


// create a component
const DataSet = ({navigation, route}) => {
  const title = route.params;
  console.log('routes', title);
  const ExtNav = useNavigation();

  const goTO = ()=>{
    navigation.popToTop();
  }
  return (
    <View>
      <Text>Sent Data</Text>
      <Button title="Subscribe"></Button>
      <Button
        onPress={() =>
          ExtNav.push(navigationScreens.EXPLORE, {
            title: 'You are in Home Section Now',
          })
        }
        title="Explore"></Button>
      <Button title="Go Back" onPress={goTO}></Button>
    </View>
  );
};

// define your Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default DataSet;
