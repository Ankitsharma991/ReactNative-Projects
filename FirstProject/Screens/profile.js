import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView} from 'react-native';
import navigationScreens from '../Components/navigationScreens';
import HeaderComp from '../customComp/headerComp';

// create a component
const Profile = props => {
  const ExtNav = useNavigation();
  const home = () => {
    ExtNav.navigate(navigationScreens.HOME, {
      title: 'You are in the Profile Section Now',
    });
  };
  const explore = () => {
    ExtNav.navigate(navigationScreens.EXPLORE, {
      title: 'You are in Home Section Now',
    });
  };
  const data = () => {
    ExtNav.navigate(navigationScreens.DATA, {
      title: 'You are in the Data Section Now',
    });
  };

  return (
    <View>
      <SafeAreaView>
        <Text>I'm profile Section</Text>
        <Text>This is params data, Welcome to my new App</Text>
        <Button onPress={home} title="Home"></Button>
        <Button onPress={explore} title="Explore"></Button>
        <Button onPress={data} title="Data"></Button>
        <HeaderComp goBack={() => ExtNav.goBack()} />
      </SafeAreaView>
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

export default Profile;
