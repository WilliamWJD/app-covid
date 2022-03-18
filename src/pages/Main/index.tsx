import React, { useState } from 'react';
import { useEffect } from 'react';
import { Alert, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Main() {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function LoadName() {
            try {
                const value = await AsyncStorage.getItem('@username')
                if (value !== null) {
                    setName(value)
                }
                setLoading(false)
            } catch (err) {
                console.log(err);
                Alert.alert('Erro', 'Erro ao carregar nome de usuário')
                setLoading(false)
            }
        }

        LoadName();
    }, [])

    if (loading) {
        return (
            <Text>Carregando</Text>
        )
    }

    return (
        <Text>{name}</Text>
    )
}