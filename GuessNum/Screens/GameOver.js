import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import PrimaryButtons from '../Components/PrimaryButtons';
import Title from '../Components/title';

function GameOver({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/image/targ.jpg')}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone Needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButtons onPress={onStartNewGame}>Start New Game</PrimaryButtons>
    </View>
  );
}

export default GameOver;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    margin: 30,
    borderColor: '#ddb52f',
    overflow: 'hidden',
    borderWidth: 3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText:{
    fontFamily:'open-sans',
    fontSize:24,
    textAlign:'center'
  },
  highlight:{
    fontFamily:"open-sans-serif"
  }
});
