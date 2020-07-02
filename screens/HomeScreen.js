import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { Icon } from 'react-native-elements';

import { styles } from '../styles/styles';

function HomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.h1}>Es wurden keine Ausstellungsstücke in deiner Nähe gefunden.</Text>

            <View style={styles.logo}>
                <Text>Logo Museum</Text>
            </View>

            <TouchableNativeFeedback
            onPress={() => navigation.navigate('Overview')}>
                <View style={styles.link}>
                    <Text style={styles.h2}>Hier geht's zur Übersicht</Text>

                    <Icon name='arrow-right' type='material-community' color='#D36462' reverse/>

                </View>
            </TouchableNativeFeedback>
        </View>
        )
    }

export default HomeScreen;