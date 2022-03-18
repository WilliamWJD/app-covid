import React, { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Container, Description, Input, ButtonGetStarted, ButtonGetStartedText } from './styles';

export function GetStarted() {
    const [name, setName] = useState('');
    const { navigate } = useNavigation();

    function handleGetStarted() {
        if (!name) {
            Alert.alert('Erro', 'Por favor, digite um nome ou um apelido')
        } else {
            AsyncStorage.setItem('@username', name);
            navigate('Main' as never);
        }
    }

    return (
        <Container>
            <Description>
                😀 Antes de começarmos,
                como podemos te chamar ?
            </Description>

            <Input
                placeholder="Digite seu nome ou apelido"
                placeholderTextColor="#DFE6E9"
                onChangeText={setName}
                value={name}
            />

            <ButtonGetStarted activeOpacity={0.5} onPress={handleGetStarted}>
                <ButtonGetStartedText>Vamos começar</ButtonGetStartedText>
            </ButtonGetStarted>
        </Container>
    )
}