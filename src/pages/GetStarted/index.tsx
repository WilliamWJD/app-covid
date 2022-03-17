import React from 'react';

import { Container, Description, Input, ButtonGetStarted, ButtonGetStartedText } from './styles';

export function GetStarted() {
    return (
        <Container>
            <Description>
                😀 Antes de começarmos
                como podemos te chamar ?
            </Description>

            <Input
                placeholder="Digite seu nome ou apelido"
                placeholderTextColor="#DFE6E9"
            />

            <ButtonGetStarted activeOpacity={0.5}>
                <ButtonGetStartedText>Vamos começar</ButtonGetStartedText>
            </ButtonGetStarted>
        </Container>
    )
}