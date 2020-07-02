import React from 'react';
import { StyleSheet, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import StackNavigator from './navigation/stackNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <StackNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
});
