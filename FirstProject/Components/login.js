import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const Login = () => {
  return (
    <View>
      <Text>Functional Component</Text>
      <Text>Login Screen</Text>
      <Text>Ankit Kumar Sharma</Text>

      <View>
        <Text>What is your name : </Text>
        <TextInput placeholder={'Enter your Name : '} onChangeText={()=>{alert("Text Changed")}}></TextInput>
        <Button
          title="Submit"
          onPress={() => {
            alert('Thanks \nYour response has been Submitted');
            TextInput.View = "";
          }}></Button>
      </View>
    </View>
  );
};

export default Login;
