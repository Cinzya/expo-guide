import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Lightbox from 'react-native-lightbox';


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

                <Lightbox>
                    <Image
                    style={styles.img}
                    source={{uri: "http://expoguide.goetzlisa.de/uploads/" + Item.image}}>

                    </Image>
                </Lightbox>
                <Text style={styles.exhibitDescription}>{Item.description}</Text>
            </ScrollView>
        </View>
        </SafeAreaView>
    )
}
