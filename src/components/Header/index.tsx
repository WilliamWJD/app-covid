import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { ButtonFilter } from './styles';

import {
    Container,
    ButtonBack,
    Welcome,
    SalutationText,
    UserName,
} from './styles';

import { ModalEstado } from '../Modal';

interface HeaderProps {
    handleGoBack(): void;
    salutation: string;
    name: string;
    showModal(): void;
}

export function Header({ handleGoBack, salutation, name, showModal }: HeaderProps) {
    return (
        <Container>
            <ButtonBack onPress={handleGoBack}>
                <FontAwesome name="angle-left" color="#5C6FAD" size={37} />
            </ButtonBack>
            <Welcome>
                <SalutationText>🙂 {salutation}</SalutationText>
                <UserName>{name}</UserName>
            </Welcome>
            <ButtonFilter onPress={showModal}>
                <FontAwesome name="filter" color="#5C6FAD" size={27} />
            </ButtonFilter>

        </Container>
    )
}