import React from 'react';
import { FontAwesome } from '@expo/vector-icons'
import { Container, HeaderContent, HeaderContentTitle, HeaderContentSubTitle, ContentTitle, ImageBack, ButtonNext, ButtonNextText } from './styles';

import BackImagePresentation from '../../images/back-presentation.png';

export function Presentation() {
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
            <ButtonNext>
                <ButtonNextText>
                    <FontAwesome name="angle-right" size={28} color="#fff" />
                </ButtonNextText>
            </ButtonNext>
        </Container>
    )
}