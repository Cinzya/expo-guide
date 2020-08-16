import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';



import { styles } from '../styles/styles';
import { TouchableNativeFeedback, ScrollView } from 'react-native-gesture-handler';

export default function OverviewScreen(props) {

  const { Items } = props.route.params;

  function printHeadline(a) {
    if(a[0]) {
      return "Ausstellungsstücke im Raum " + a[0].roomID
    } else {
      return "Ausstellungsstücke"
    }
  }

  function printItems(a) {
    if(a[0]) {
      return a.map(item => (
        <TouchableNativeFeedback
        onPress={() => props.navigation.navigate('Exhibit', {Item: item})}
        key={item.itemID}
        >
      
        <View style={styles.exhibit}>
          <View style={styles.exhibitContainer}>
            <Text style={styles.exhibitText}>{item.itemname}</Text>
            <Icon name='arrow-right' type='material-community' color='#D36462' reverse/>
          </View>
        </View>
      </TouchableNativeFeedback>
    ))
    } else {
      return <Text>Es ist keine Ausstellungsstücke für diesen Raum vorhanden</Text>
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Text style={styles.h1}>{printHeadline(Items)}</Text>

      <ScrollView>{printItems(Items)}</ScrollView>
        
      </View>
    </SafeAreaView>
  );
}