import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      //onDelete is pointing to an existing function, the removeGoalHandler
      onPress={props.onDelete.bind(this, props.id)}
      //with bind we pass the argument removeGoalHandler is waiting for
      activeOpacity={0.8}>
      <View style={styles.listItem}>
        <Text> {props.title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
