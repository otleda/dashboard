import React from 'react';
import {
     Container,
     TitleContainer,
     Controllers
 } from './style';

const ContainerHeader: React.FC = () => {
    return (
        <Container>
            <TitleContainer>
                <h1>title</h1>
            </TitleContainer>

            <Controllers>
                <button type="button">Button A</button>
                <button type="button">Button B</button>
            </Controllers>
        </Container>
    );
}

export default ContainerHeader;