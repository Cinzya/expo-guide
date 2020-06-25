import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';

class HomeScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.h1}>Es wurden keine Ausstellungsstücke in deiner Nähe gefunden.</Text>

                <View style={styles.exhibit}>
                    <Text>Logo Museum</Text>
                </View>

                <View style={styles.link}>
                    <Text style={styles.h2}>Hier geht's zur Übersicht</Text>
                    <TouchableNativeFeedback>
                        <Text style={styles.button}>→</Text>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        height: '90%',
        maxWidth: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    exhibit: {
        width: 290,
        height: 290,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'gray',
        borderRadius: 290/2
    },
    link: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 60/2,
        color: 'white',
        backgroundColor: '#D36462',
        justifyContent: 'center',
        alignContent: 'center'
    },
    h1: {
        color: '#D36462',
        fontSize: 34
    },
    h2: {
        fontSize: 20
    }
});

export default HomeScreen;