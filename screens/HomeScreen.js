import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from '../styles/styles';

class HomeScreen extends Component {
    constructor() {
        super()
        this.state = {
            setLoading: true,
            rooms: "",
            items: ""
        }
    }

    getDataOf(a) {
        console.log(a + ': Starting Fetch Call')
        fetch('http://expoguide.goetzlisa.de/' + a + '.php', {
            method: 'get',
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json',     //Type of content to be sent 
                'Accept': 'application/json'            //and to be expected
            }
        })
            .then((response) => response.json())      //Turn response into JSON
            .then((json) => this.setState({[a]: json}))            //Write response to variable
            .then(() => console.log(a + ': MySQL data set'))
            .catch((error) => console.error(error))
            .then(() => console.log());           //Get rid of spinny thing
    }

    componentDidMount() {
        console.log('Component mounted')
        this.getDataOf('rooms');
        this.getDataOf('items');
    }


    render() {
        return(
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.h1}>Es wurden keine Ausstellungsstücke in deiner Nähe gefunden.</Text>
        
                    <View style={styles.logo}>
                        <Text style={styles.logoText}>Logo Museum</Text>
                    </View>
        
                    <TouchableNativeFeedback
                    onPress={() => this.props.navigation.navigate('Rooms', {Rooms: this.state.rooms, Items: this.state.items}) }>
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

export default HomeScreen;