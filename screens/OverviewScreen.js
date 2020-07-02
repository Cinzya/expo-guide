import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function OverviewScreen() {
  return (
    <View style={styles.container}>
      <Text>Übersicht Ausstellungsstücke</Text>

      <View>
        <Text>Raum 1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});
