import React from 'react';
import { Container } from './styles';

import ContentHeader from '../../components/ContentHeader';
import InputSelect from '../../components/InputSelect';


//(F)uncional (C)omponent
const Dashboard: React.FC = () => {

    const optionsValue = [
        {value: 'Abril', label: 'Abril'},
        {value: 'Maio', label: 'Maio'},
        {value: 'Junho', label: 'Junho'},
        {value: 'Julho', label: 'Julho'}
    ];

    return (
        <Container>
            <ContentHeader title = "Dashboard" lineColor = "#E44C4E">
                <InputSelect options = {optionsValue}/>
            </ContentHeader>
        </Container>
        );
}

export  default Dashboard;