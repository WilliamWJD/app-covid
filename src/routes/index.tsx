import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import { GetStarted } from '../pages/GetStarted';
import { Presentation } from '../pages/Presentation';

const Stack = createNativeStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Presentation'
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right'
                }}
            >
                <Stack.Screen name="Presentation" component={Presentation} />
                <Stack.Screen name="GetStarted" component={GetStarted} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}