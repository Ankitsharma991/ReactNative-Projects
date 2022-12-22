import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';



function GuessLogItems({roundNumber, guess}){
    return(
        <View style={styles.listName}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess {guess}</Text>
        </View>
    )
}

export default GuessLogItems;

const styles = StyleSheet.create({
    listName:{
        borderColor:'#52ddef',
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        borderColor:'#52ddef',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
        shadowOffset:{width:0, height:0},
        shadowOpacity:0.25,
        shadowRadius:3,
    },
    itemText:{
        fontFamily:'open-sans',

    }
})