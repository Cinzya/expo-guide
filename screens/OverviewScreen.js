import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';



import { styles } from '../styles/styles';
import { TouchableNativeFeedback, ScrollView } from 'react-native-gesture-handler';

export default function OverviewScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.h1}>Übersicht Ausstellungsstücke</Text>

        <ScrollView>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate('Exhibit')}>

            <View style={styles.exhibit}>
              <Text style={styles.exhibitText}>Name des Ausstellungsstücks</Text>
              <Icon name='arrow-right' type='material-community' color='#D36462' reverse/>

            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            onPress={() => navigation.navigate('Exhibit')}>
              
            <View style={styles.exhibit}>
              <Text style={styles.exhibitText}>Name des Ausstellungsstücks</Text>
            </View>
          </TouchableNativeFeedback>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}