import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GameOver from './Screens/GameOver';
import GameScreen from './Screens/GameScreen';
import StartGameScreen from './Screens/StartGameScreens';

function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function StartNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let Screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    Screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    Screen = (
      <GameOver
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={StartNewGameHandler}
      />
    );
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  return (
    <LinearGradient colors={['#3b5998', '#192f6a']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/image/dices.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{Screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

export default App;
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
