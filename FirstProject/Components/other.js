import React, {Component} from "react";
import {View, Button, TextInput, StyleSheet} from 'react-native';

class App3 extends React.Component{
    constructor(){
            super();
            this.state = {
                name : '',
                password:'',
                address:'',
            }
    }
    submit(){
        alert("Function Called : ");
        console.warn('all values',this.state)
    }
    render(){
        return (
            <View style={{flex:1, backgroundColor:"red"}}>
                <TextInput placeholder="Enter Your Name : " onChangeText={(text)=>{this.setState({name:text})}} style={styles.textBox}></TextInput>
                <TextInput placeholder="Enter the Password : " onChangeText={(text)=>{this.setState({password:text})}} style={styles.textBox}></TextInput>
                <TextInput placeholder="Enter the Address : " onChangeText={(text)=>{this.setState({address:text})}} style={styles.textBox}></TextInput>
                <Button title="Submit" onPress={()=>{this.submit()}}></Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textBox:{
        borderColor:'skyblue',
        borderWidth:2,
        padding:10,
        marginHorizontal:20,
        marginVertical:10,
    },
})

export default App3;