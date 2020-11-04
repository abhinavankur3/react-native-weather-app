/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// div - View
// p,h1-6 - Text

const App = () => {
  return (
    <View style={styles.App}>
      <Text>Abhinav Ankur</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  App: {
    marginLeft: 50,
    marginTop: 100,
    borderWidth: 2,
  },
});

export default App;
