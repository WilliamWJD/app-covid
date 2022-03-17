import React from 'react';
import { Container, HeaderContent, HeaderContentTitle, HeaderContentSubTitle, ContentTitle } from './styles';

import BackImagePresentation from '../../images/back-presentation.png';

export function Presentation() {
    return (
        <Container>
            <HeaderContent>
                <ContentTitle>
                    <HeaderContentTitle>Covid Cases</HeaderContentTitle>
                    <HeaderContentSubTitle>Monitore os casos de covid 19
                        pelo mundo realizando um filtro
                        por país</HeaderContentSubTitle>
                </ContentTitle>
            </HeaderContent>
        </Container>
    )
}