import React from 'react';
import InputSelect from '../InputSelect';

import {
     Container,
     TitleContainer,
     Controllers
 } from './style';

const ContainerHeader: React.FC = () => {

    const optionsValue = [
        {value: 'Abril', label: 'Abril'},
        {value: 'Maio', label: 'Maio'},
        {value: 'Junho', label: 'Junho'},
    ]

    return (
        <Container>
            <TitleContainer>
                <h1>title</h1>
            </TitleContainer>

            <Controllers>
                <InputSelect options = {optionsValue}/>
            </Controllers>
        </Container>
    );
}

export default ContainerHeader;