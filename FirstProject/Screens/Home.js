import { useNavigation } from '@react-navigation/native';
import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import navigationScreens from '../Components/navigationScreens';
import HeaderComp from '../customComp/headerComp';

const Home = ()=>{
  const ExtNav = useNavigation()
  const profile = ()=>{ 
    ExtNav.push(navigationScreens.PROFILE, {title: "You are in the Profile Section Now"})
  }
  const explore = ()=>{
    ExtNav.navigate(navigationScreens.EXPLORE, {title:"You are in Home Section Now"})
  }
  const data = ()=>{
    ExtNav.navigate(navigationScreens.DATA, {title: "You are in the Data Section Now"})
  }
    return(
        <View style={styles.container}>
            <Text>Home</Text>
            {/* {HeaderComp} */}
            {/* <HeaderComp /> */}
            <Button onPress={profile} title='Profile'></Button>
            <Button onPress={explore} title='Explore'></Button>
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
    backgroundColor: '#FFFFFF',
  },
});

export default Home;
