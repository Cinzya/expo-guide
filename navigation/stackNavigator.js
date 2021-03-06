import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import ExhibitScreen from '../screens/ExhibitScreen';
import OverviewScreen from '../screens/OverviewScreen';
import RoomsScreen from '../screens/RoomsScreen';

const Stack = createStackNavigator();

function StackNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Rooms" component={RoomsScreen}/>
                <Stack.Screen name="Exhibit" component={ExhibitScreen}/>
                <Stack.Screen name="Overview" component={OverviewScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;