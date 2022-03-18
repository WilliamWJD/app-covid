import React, { useState } from 'react';
import { useEffect } from 'react';
import { Alert, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Container,
    Header,
    Welcome,
    SalutationText,
    UserName,
    ButtonFilter,
    ContentPrevention,
    ContentPreventionText,
    WorldCasesContent,
    WorldCaseTitle,
    WorldCaseImage,
    BoxTypeCases,
    BoxTypeCaseItemTitle,
    BoxTypeCaseItem,
    BoxTypeCaseItemValue
} from './styles';

import BackMain from '../../images/back-main.png';

export function Main() {
    const [name, setName] = useState('');
    const [salutation, setSalutation] = useState('');
    const [loading, setLoading] = useState(true);

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
        <Container>
            <Header>
                <Welcome>
                    <SalutationText>{salutation}</SalutationText>
                    <UserName>{name}</UserName>
                </Welcome>
                <ButtonFilter>
                    <FontAwesome name="filter" color="#5C6FAD" size={27} />
                </ButtonFilter>
            </Header>

            <ContentPrevention activeOpacity={0.5}>
                <ContentPreventionText>
                    Como evitar a contaminação
                    por covid-19
                </ContentPreventionText>
                <FontAwesome name="angle-right" color="#443F70" size={28} />
            </ContentPrevention>

            <WorldCasesContent>
                <WorldCaseTitle>Total de casos no mundo</WorldCaseTitle>
                <WorldCaseImage source={BackMain} />

                <BoxTypeCases horizontal={true} showsHorizontalScrollIndicator={false}>
                    <BoxTypeCaseItem>
                        <BoxTypeCaseItemTitle>Confirmados</BoxTypeCaseItemTitle>
                        <BoxTypeCaseItemValue>460.000,00</BoxTypeCaseItemValue>
                    </BoxTypeCaseItem>

                    <BoxTypeCaseItem style={{ backgroundColor: '#EE7473' }}>
                        <BoxTypeCaseItemTitle>Mortes</BoxTypeCaseItemTitle>
                        <BoxTypeCaseItemValue>6.050,00</BoxTypeCaseItemValue>
                    </BoxTypeCaseItem>

                    <BoxTypeCaseItem style={{ backgroundColor: '#2ECC71' }}>
                        <BoxTypeCaseItemTitle>Recuperados</BoxTypeCaseItemTitle>
                        <BoxTypeCaseItemValue>300.000,00</BoxTypeCaseItemValue>
                    </BoxTypeCaseItem>
                </BoxTypeCases>
            </WorldCasesContent>
        </Container>
    )
}