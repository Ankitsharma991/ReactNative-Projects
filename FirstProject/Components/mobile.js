import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
class Mobile extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 'Hii',
    };
  }
  render() {
    // console.warn(this.state)
    return (
      <View>
        <Text style={style.red}>{this.state.data}</Text>
        <Button
          title="Update State"
          onPress={() => {
            this.setState({data: 'Updated data'});
          }}></Button>
      </View>
    );
  }
}
const style = StyleSheet.create({
  red: {
    fontSize: 30,
    color: 'red',
    backgroundColor: 'black',
  },
  mid: {
    display: 'flex',
    alignItems: 'center',
  },
});
export default Mobile;
