import React from 'react';
import { Container } from './styles';

import ContentHeader from '../../components/ContentHeader';

//(F)uncional (C)omponent
const Dashboard: React.FC = () => {

    return (
        <Container>
            <ContentHeader/>
        </Container>
        );
}

export  default Dashboard;