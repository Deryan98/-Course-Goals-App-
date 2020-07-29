/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    //we need that instead of putting the raw array, it gets returned by a function
    //so that we can have the guarantee that is the current value
    setCourseGoals((currentGoals) => [
      ...courseGoals,
      /*The value assigned to key is not the best solution, because it does not returns unique values */
      //Now we have a Shape to use in the FlatList
      {
        id: Math.random().toString(),
        value: goalTitle /* This value needs to be forwarded*/,
      },
    ]); //[...<array>] the spread operator works when we have this context.
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      //filter returns a new array given a condition
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        //in data prop, you need an array
        data={courseGoals}
        //renderItem calls a function that is called for every list item, to render it.
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
