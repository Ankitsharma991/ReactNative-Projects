import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
class App2 extends Component {
  constructor() {
    super();
    this.state = {
        data: <View>Enter Your age : <TextInput placeholder='Enter your name : '></TextInput></View>,
    }
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}>Class Component</Text>
        {this.state.data}
      </View>
    );
  }
}
export default App2;
