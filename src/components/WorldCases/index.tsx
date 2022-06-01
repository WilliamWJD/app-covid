import React from 'react';

import BackMain from '../../images/back-main.png';
import { BrazilCases } from '../../pages/Main';

import {
    Container,
    WorldCaseTitle,
    WorldCaseImage,
    BoxTypeCases,
    BoxTypeCaseItemTitle,
    BoxTypeCaseItem,
    BoxTypeCaseItemValue
} from './styles';

export function WorldCases({ confirmed, deaths }: BrazilCases) {
    return (
        <Container>
            <WorldCaseTitle>Situação da Covid19 no Brazil</WorldCaseTitle>
            <WorldCaseImage source={BackMain} />

            <BoxTypeCases horizontal={true} showsHorizontalScrollIndicator={false}>
                <BoxTypeCaseItem>
                    <BoxTypeCaseItemTitle>Confirmados</BoxTypeCaseItemTitle>
                    <BoxTypeCaseItemValue>{Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(confirmed)}</BoxTypeCaseItemValue>
                </BoxTypeCaseItem>

                <BoxTypeCaseItem style={{ backgroundColor: '#EE7473' }}>
                    <BoxTypeCaseItemTitle>Mortes</BoxTypeCaseItemTitle>
                    <BoxTypeCaseItemValue>{Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(deaths)}</BoxTypeCaseItemValue>
                </BoxTypeCaseItem>
            </BoxTypeCases>
        </Container>
    )
}