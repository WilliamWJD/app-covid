import React from 'react';

import { Container, ContentPreventionText } from './styles';

export function Prevention() {
    return (
        <Container activeOpacity={0.5}>
            <ContentPreventionText>
                Lave as mãos com água e sabão por pelo menos 20 segundos, especialmente depois de estar em um local público ou depois de assoar o nariz, tossir ou espirrar.
            </ContentPreventionText>
        </Container>
    )
}