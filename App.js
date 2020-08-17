import React from 'react';
import { Text } from 'react-native';

import StackNavigator from './navigation/stackNavigator';
import { useFonts, Baskervville_400Regular } from '@expo-google-fonts/baskervville';

export default function App() {
  let [fontsLoaded] = useFonts({
    Baskervville_400Regular,
  })

  if (!fontsLoaded) {
      return <Text>Loading...</Text>
  } else {
    return <StackNavigator />
  }
}

