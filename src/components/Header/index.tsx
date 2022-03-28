import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import {
    Container,
    ButtonBack,
    Welcome,
    SalutationText,
    UserName,
    ButtonFilter,
} from './styles';

interface HeaderProps {
    handleGoBack(): void;
    salutation: string;
    name: string;
}

export function Header({ handleGoBack, salutation, name }: HeaderProps) {
    return (
        <Container>
            <ButtonBack onPress={handleGoBack}>
                <FontAwesome name="angle-left" color="#5C6FAD" size={37} />
            </ButtonBack>
            <Welcome>
                <SalutationText>🙂 {salutation}</SalutationText>
                <UserName>{name}</UserName>
            </Welcome>
            <ButtonFilter>
                <FontAwesome name="filter" color="#5C6FAD" size={27} />
            </ButtonFilter>
        </Container>
    )
}