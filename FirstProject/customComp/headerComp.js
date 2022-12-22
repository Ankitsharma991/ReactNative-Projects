import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { create } from 'react-test-renderer';

const HeaderComp = ({goBack = () => {alert('You clicked GoBack')}, text}) => {
  const Bot = create
  return (
    <View style={styles.container}>
      <TouchableOpacity onpress={goBack}>
        <Text>GoBack</Text>
      </TouchableOpacity>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'space-between',
    height: 42,
    backgroundColor: 'red',
    width: '100%',
    alignItems: 'center',
  },

});
export default HeaderComp;
