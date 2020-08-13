import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';



import { styles } from '../styles/styles';
import { TouchableNativeFeedback, ScrollView } from 'react-native-gesture-handler';

export default function OverviewScreen(props) {

  const { Items } = props.route.params;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.h1}>Ausstellungsstücke im Raum {Items[0].roomID}</Text>

        <ScrollView>
          {Items.map(item => (
              <TouchableNativeFeedback
              onPress={() => props.navigation.navigate('Exhibit', {Item: item})}
              key={item.itemID}
              >
            
              <View style={styles.exhibit}>
                <Text style={styles.exhibitText}>{item.itemname}</Text>
                <Icon name='arrow-right' type='material-community' color='#D36462' reverse/>

              </View>
            </TouchableNativeFeedback>
          ))}
          
        </ScrollView>
        
      </View>
    </SafeAreaView>
  );
}