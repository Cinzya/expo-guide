import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from '../styles/styles';

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            setLoading: true,
            rooms: "",
            items: ""
        }
    }
    componentDidMount() {
        console.log('Starting Fetch Call')
        //Fetch request to db host
        fetch('http://expoguide.goetzlisa.de/rooms.php', {
            method: 'get',
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json',     //Type of content to be sent 
                'Accept': 'application/json'            //and to be expected
            }
        })
            .then((response) => response.json())      //Turn response into JSON
            .then((json) => this.setState({rooms: json}))            //Write response to variable
            .then(() => console.log('Rooms MySQL data set'))
            .catch((error) => console.error(error))
            .then(() => this.setState({setLoading: false}));           //Get rid of spinny thing

        console.log('Starting Fetch Call 2')
        //Fetch request to db host
        fetch('http://expoguide.goetzlisa.de/items.php', {
            method: 'get',
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json',     //Type of content to be sent 
                'Accept': 'application/json'            //and to be expected
            }
        })
            .then((response) => response.json())      //Turn response into JSON
            .then((json) => this.setState({items: json}))            //Write response to variable
            .then(() => console.log(this.state.items))
            .catch((error) => console.error(error))
            .then(() => this.setState({setLoading: false}));
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