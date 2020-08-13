import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import { styles } from '../styles/styles';

import { ScrollView } from 'react-native-gesture-handler';


export default function ExhibitScreen(props) {

    const { Item } = props.route.params;

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.h1}>{Item.itemname}</Text>
                <Text style={styles.h2}>Künstler: {Item.artist}, Jahr: {Item.date}</Text>

                <View style={styles.img}>

                </View>

                <Text>{Item.description}</Text>
            </ScrollView>
        </View>
        </SafeAreaView>
    )
}
