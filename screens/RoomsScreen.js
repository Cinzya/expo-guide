import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/styles';

import { TouchableNativeFeedback, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function RoomsScreen({ navigation }) {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.h1}>Übersicht Ausstellungsstücke</Text>

                <ScrollView>
                    <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Overview')}>

                        <View style={styles.room}>
                            <Text style={styles.roomText}>Raum 1</Text>
                            <Icon name='arrow-right' type='material-community' color='#D36462' reverse/>

                        </View>
                    </TouchableNativeFeedback>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}