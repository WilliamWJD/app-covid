import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { Container, ContentPreventionText } from './styles';

export function Prevention() {
    return (
        <Container activeOpacity={0.5}>
            <ContentPreventionText>
                Como evitar a contaminação
                por covid-19
            </ContentPreventionText>
            <FontAwesome name="angle-right" color="#443F70" size={28} />
        </Container>
    )
}