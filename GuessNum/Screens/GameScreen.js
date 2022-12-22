import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import Card from '../Components/Card';
import NumberContainer from '../Components/game';
import PrimaryButtons from '../Components/PrimaryButtons';
import Title from '../Components/title';
import InstrunctionsText from '../Components/instrunctionsText';
import GuessLogItems from '../Components/guessLogItems';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {
  const intialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(intialGuess);
  const [guessRounds, setGuessRounds] = useState([intialGuess]);
  const {width, height} = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuestHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;
  let content = (
    <>
      {' '}
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstrunctionsText style={styles.instrunctionText}>
          Higher or Lighter ?
        </InstrunctionsText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButtons onPress={nextGuestHandler.bind(this, 'greater')}>
              +
            </PrimaryButtons>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButtons onPress={nextGuestHandler.bind(this, 'lower')}>
              {/* <Icon name="md-remove" size={24} color="white" /> */}-
            </PrimaryButtons>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 400) {
    content = (
      <>
        <InstrunctionsText style={styles.instrunctionText}>
          Higher or Lighter ?
        </InstrunctionsText>
        <View>
          <View style={styles.buttonContainer}>
            <PrimaryButtons onPress={nextGuestHandler.bind(this, 'greater')}>
              +
            </PrimaryButtons>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButtons onPress={nextGuestHandler.bind(this, 'lower')}>
              -
            </PrimaryButtons>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={itemData => {
            return (
              <GuessLogItems
                roundNumber={guessRoundsListLength - itemData.index}
                guess={itemData.item}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  instrunctionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
