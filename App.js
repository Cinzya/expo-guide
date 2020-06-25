import React from 'react';
import { StyleSheet, View } from 'react-native';

import HomeScreen from './screens/home';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
});
