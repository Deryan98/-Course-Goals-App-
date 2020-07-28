import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      {/* The bind method passes the argument that onAddGoal Needs to be executed */}
      <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      {/* This is how you pass Data Between Components */}
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
