import React from 'react';

import BackMain from '../../images/back-main.png';
import { WorldCasesProps } from '../../pages/Main';

import {
    Container,
    WorldCaseTitle,
    WorldCaseImage,
    BoxTypeCases,
    BoxTypeCaseItemTitle,
    BoxTypeCaseItem,
    BoxTypeCaseItemValue
} from './styles';

export function WorldCases({ TotalConfirmed, TotalDeaths }: WorldCasesProps) {
    return (
        <Container>
            <WorldCaseTitle>Total de casos no mundo</WorldCaseTitle>
            <WorldCaseImage source={BackMain} />

            <BoxTypeCases horizontal={true} showsHorizontalScrollIndicator={false}>
                <BoxTypeCaseItem>
                    <BoxTypeCaseItemTitle>Confirmados</BoxTypeCaseItemTitle>
                    <BoxTypeCaseItemValue>{Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(TotalConfirmed)}</BoxTypeCaseItemValue>
                </BoxTypeCaseItem>

                <BoxTypeCaseItem style={{ backgroundColor: '#EE7473' }}>
                    <BoxTypeCaseItemTitle>Mortes</BoxTypeCaseItemTitle>
                    <BoxTypeCaseItemValue>{Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(TotalDeaths)}</BoxTypeCaseItemValue>
                </BoxTypeCaseItem>

                <BoxTypeCaseItem style={{ backgroundColor: '#2ECC71' }}>
                    <BoxTypeCaseItemTitle>Recuperados</BoxTypeCaseItemTitle>
                    <BoxTypeCaseItemValue>300.000,00</BoxTypeCaseItemValue>
                </BoxTypeCaseItem>
            </BoxTypeCases>
        </Container>
    )
}