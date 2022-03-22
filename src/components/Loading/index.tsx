import React from 'react';
import { Image } from 'react-native';

import CoronaLoadingImage from '../../images/loading.gif';

import { Container, ImageCorona } from './styles';

export function Loading() {
    return (
        <Container>
            <ImageCorona source={CoronaLoadingImage} />
        </Container>
    )
}