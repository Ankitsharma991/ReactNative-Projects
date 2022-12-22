import React from 'react';
import {useState} from 'react';
import {Text, View, StyleSheet, FlatList, Button, Image, StatusBar} from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/Goalinput';

const HelloWorldApp = () => {
  // for button
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // adding goals
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    // setModalIsVisible(false);
    endAddGoalHandler();
  }

  // deleting goals
  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id != id);
    });
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="forestgreen"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <Text style={styles.head}>List of Goals...</Text>
        <FlatList
          data={courseGoals}
          alwaysBounceVertical={false}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
};
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: 'darkblue',
  },

  goalsContainer: {
    flex: 5,
    paddingTop: 24,
  },
  head: {
    color: 'white',
    fontSize: 25,
    fontFamily: '',
    fontWeight: 'bold',
    textShadowColor: '#3D3C3A',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 2,
  },
});
export default HelloWorldApp;
