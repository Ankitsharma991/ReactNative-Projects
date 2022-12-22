import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import PrimaryButtons from '../Components/PrimaryButtons';
import {useState} from 'react';
import Title from '../Components/title';
import Card from '../Components/Card';
import InstrunctionsText from '../Components/instrunctionsText';

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const {width, height} = useWindowDimensions();

  function confirmInputHandler() {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      //Show alert ..
      Alert.alert(
        'Invalid Number',
        'Number has to be a number between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }
    onPickNumber(choosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  const marginTop = height < 400 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
      <View style={[styles.rootContainer, {marginTop: marginTop}]}>
        <Title>Guess My Number</Title>
        <Card>
          <InstrunctionsText>Enter a Number</InstrunctionsText>
          <TextInput
            style={styles.NumInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
          />

          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButtons onPress={resetInputHandler}>Reset</PrimaryButtons>
            </View>

            <View style={styles.buttonContainer}>
              <PrimaryButtons onPress={confirmInputHandler}>
                Confirm
              </PrimaryButtons>
            </View>
          </View>
        </Card>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  NumInput: {
    padding: 0,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 400 ? 30 : 100,
    alignItems: 'center',
  },
});

export default StartGameScreen;
