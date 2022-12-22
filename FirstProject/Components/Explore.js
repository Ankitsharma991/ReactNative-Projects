import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import navigationScreens from './navigationScreens';
navigationScreens

const Explore = ({navigation})=>{
  const profile = ()=>{
    navigation.navigate(navigationScreens.PROFILE, {title: "You are in the Profile Section Now"})
  }
  const home = ()=>{
    navigation.navigate(navigationScreens.HOME, {title:"You are in Home Section Now"})
  }
  const data = ()=>{
    navigation.navigate(navigationScreens.DATA, {title: "You are in the Data Section Now"})
  }
    return(
        <View style={styles.container}>
            <Text>Explore</Text>
            <Button onPress={profile} title='Profile'></Button>
            <Button onPress={home} title='Home'></Button>
            <Button onPress={data} title='Data'></Button>
        </View>
    )
}
// Defining Styleshit
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF9F6',
  },
});

export default Explore;