import React from 'react';
import { Container } from './styles';

import ContentHeader from '../../components/ContentHeader';
import InputSelect from '../../components/InputSelect';


const List: React.FC = () => {

    const optionsValue = [
        {value: 'Abril', label: 'Abril'},
        {value: 'Maio', label: 'Maio'},
        {value: 'Junho', label: 'Junho'},
        {value: 'Julho', label: 'Julho'}
    ];

    return(
        <Container>
            <ContentHeader title = "Entries" lineColor = "#4E41F0">
                <InputSelect options = {optionsValue}/>
            </ContentHeader>
        </Container>
    );
}
export default List;