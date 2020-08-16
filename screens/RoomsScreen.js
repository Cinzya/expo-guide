import React from 'react';
import { View, Text } from 'react-native';


import { styles } from '../styles/styles';

import { TouchableNativeFeedback, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function RoomsScreen(props) {

    const { Rooms } = props.route.params;
    const { Items } = props.route.params;
    
    
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.h1}>Übersicht Ausstellungsstücke</Text>

                <ScrollView>
                {Rooms.map(room => (
                    <TouchableNativeFeedback
                    onPress={() => props.navigation.navigate('Overview', { Items: Items.filter(item => item.roomID == room.roomID) })}
                    key={room.roomID}
                    >
                        <View style={styles.room}>
                            <Text style={styles.roomText}>{room.roomname}</Text>
                            <Icon name='arrow-right' type='material-community' color='#D36462' reverse/>

                        </View>
                    </TouchableNativeFeedback>
                ))}
                    
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}