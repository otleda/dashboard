import React from 'react';
import { Container } from './styles';

import ContentHeader from '../../components/ContentHeader';
import InputSelect from '../../components/InputSelect';


//(F)uncional (C)omponent
const Dashboard: React.FC = () => {

    const months = [
        {value: 4, label: 'Abril'},
        {value: 5, label: 'Maio'},
        {value: 6, label: 'junho'},
        {value: 7, label: 'julho'}
    ];

    const years = [
        {value: 2020, label: 2020},
        {value: 2019, label: 2019},
        {value: 2018, label: 2018},
        {value: 2017, label: 2017}
    ];

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#4E41F0">
                <InputSelect options = {months}/>
                <InputSelect options = {years}/>
            </ContentHeader>
        </Container>
        );
}
export  default Dashboard;