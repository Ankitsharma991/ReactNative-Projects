import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import GoalItem from './Components/GoalItem';

const HelloWorldApp = () => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      // enteredGoalText,
      {text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal!!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals...</Text>
        <FlatList
          data={courseGoals}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
                <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index)=>{
            return item.id;
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
    paddingTop: 24,
  }
});
export default HelloWorldApp;
