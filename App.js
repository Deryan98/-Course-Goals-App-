/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

export default function App() {
  return (
    <View style={{paddingTop: 50}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'stretch',
        }}>
        <TextInput
          placeholder="1"
          style={{
            flex: 1,
            borderColor: 'black',
            borderWidth: 1,
          }}
        />
        <TextInput
          placeholder="2"
          style={{
            flex: 1,
            borderColor: 'black',
            borderWidth: 1,
          }}
        />
        <TextInput
          placeholder="3"
          style={{
            flex: 2,
            borderColor: 'black',
            borderWidth: 1,
          }}
        />
      </View>
      <View></View>
    </View>
  );
}
