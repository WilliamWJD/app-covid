import React, { useState } from 'react';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';

import {
    Container,
} from './styles';

import { Loading } from '../../components/Loading';
import { Header } from '../../components/Header';
import { WorldCases } from '../../components/WorldCases';
import { Prevention } from '../../components/Prevention';

export interface WorldCasesProps {
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered?: number;
}

export function Main() {
    const [name, setName] = useState('');
    const [salutation, setSalutation] = useState('');
    const [loading, setLoading] = useState(true);
    const [worldCases, setWorldCases] = useState<WorldCasesProps>({} as WorldCasesProps);

    const navigation = useNavigation();

    useEffect(() => {
        async function LoadName() {
            try {
                const value = await AsyncStorage.getItem('@username')

                if (value !== null) {
                    setName(value)
                }

                const hour = new Date().getHours();

                if (hour < 12) {
                    setSalutation('Bom dia')
                } else if (hour >= 12 && hour < 18) {
                    setSalutation('Boa tarde')
                } else {
                    setSalutation('Boa noite')
                }

                const response = await api.get('/world/total');

                setWorldCases(response.data);

                setLoading(false)
            } catch (err) {
                console.log(err);
                Alert.alert('Erro', 'Erro ao carregar nome de usuário')
                setLoading(false)
            }
        }

        LoadName();
    }, [])

    async function handleGoBack() {
        await AsyncStorage.removeItem("@username");
        navigation.goBack()
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <Container>
            <Header
                handleGoBack={handleGoBack}
                salutation={salutation}
                name={name}
            />

            <Prevention />

            <WorldCases
                TotalConfirmed={worldCases.TotalConfirmed}
                TotalDeaths={worldCases.TotalDeaths}
            />
        </Container>
    )
}