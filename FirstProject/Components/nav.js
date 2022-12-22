import React, { Component } from "react";
import {View,Text, Button, TextInput, StyleSheet} from 'react-native';

class Nav extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <View>
                <Text style={Styles.Txt}>This is Nav</Text>
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    Txt : {
        color : 'red',
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Nav;