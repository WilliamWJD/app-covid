import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GetStarted } from '../pages/GetStarted';
import { Main } from '../pages/Main';
import { Presentation } from '../pages/Presentation';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { Loading } from '../components/Loading';

const Stack = createNativeStackNavigator();

export function Routes() {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function LoadName() {
            const value = await AsyncStorage.getItem('@username')
            console.log(value)
            if (value !== null) {
                setName(value)
            }
            setLoading(false)
        }
        LoadName();
    }, [])

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={name ? 'Main' : 'Presentation'}
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right'
                }}
            >
                <Stack.Screen name="Presentation" component={Presentation} />
                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}