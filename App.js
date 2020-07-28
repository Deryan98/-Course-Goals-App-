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

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    //we need that instead of putting the raw array, it gets returned by a function
    //so that we can have the guarantee that is the current value
    setCourseGoals((currentGoals) => [
      ...courseGoals,
      /*The value assigned to key is not the best solution, because it does not returns unique values */
      {id: Math.random().toString(), value: enteredGoal}, //Now we have a Shape to use in the FlatList
    ]); //[...<array>] the spread operator works when we have this context.
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>

      <FlatList
        keyExtractor={(item, index) => item.id}
        //in data prop, you need an array
        data={courseGoals}
        //renderItem calls a function that is called for every list item, to render it.
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text> {itemData.item.value} </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
