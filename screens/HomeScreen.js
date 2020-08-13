import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from '../styles/styles';

class HomeScreen extends Component {
    render() {
        return(
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.h1}>Es wurden keine Ausstellungsstücke in deiner Nähe gefunden.</Text>
        
                    <View style={styles.logo}>
                        <Text>Logo Museum</Text>
                    </View>
        
                    <TouchableNativeFeedback
                    onPress={() => { this.props.navigation.Overview() } }>
                        <View style={styles.link}>
                            <Text style={styles.h2}>Hier geht's zur Übersicht</Text>
        
                            <Icon name='arrow-right' type='material-community' color='#D36462' reverse/>
        
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </SafeAreaView>
            )
        }
    }

export default withNavigation(HomeScreen);