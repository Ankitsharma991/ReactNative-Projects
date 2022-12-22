import React from 'react';
import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';
import {useState} from 'react';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  
  // console.log('GoalInput Component rendered');
  // console.log(enteredGoalText);

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/target1.jpg')}
          style={styles.image}
        />
        <TextInput
          placeholder="Your course goal!!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={addGoalHandler}
              color="green"></Button>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'darkblue',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: 'azure',
    borderRadius: 6,
    color: '#120438',
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: 'row',
  },
  button: {
    width: '33%',
    marginHorizontal: 8,
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
    borderRadius: 100,
  },
});
