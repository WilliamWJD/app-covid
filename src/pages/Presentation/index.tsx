import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'
import { Alert, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, HeaderContent, HeaderContentTitle, HeaderContentSubTitle, ContentTitle, ImageBack, ButtonNext, ButtonNextText } from './styles';

import BackImagePresentation from '../../images/back-presentation.png';

export function Presentation() {
    const { navigate } = useNavigation();

    return (
        <Container>
            <HeaderContent>
                <ContentTitle>
                    <HeaderContentTitle>Covid Cases</HeaderContentTitle>
                    <HeaderContentSubTitle>
                        Monitore os casos de covid 19
                        pelo mundo realizando um filtro
                        por país
                    </HeaderContentSubTitle>
                </ContentTitle>
            </HeaderContent>
            <ImageBack source={BackImagePresentation} />
            <ButtonNext activeOpacity={0.5} onPress={() => navigate('GetStarted' as never)}>
                <ButtonNextText>
                    <FontAwesome name="angle-right" size={28} color="#fff" />
                </ButtonNextText>
            </ButtonNext>
        </Container>
    )
}