import React from 'react';
import { Container, Content, Filters } from './styles';

import ContentHeader from '../../components/ContentHeader';
import InputSelect from '../../components/InputSelect';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';


const List: React.FC = () => {

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

    return(
        <Container>
            <ContentHeader title = "Exits" lineColor = "#E44C4E">
                <InputSelect options = {months}/>
                <InputSelect options = {years}/>
            </ContentHeader>

            <Filters>
                <button type="button" className="tag_filter tag_filter_recurrent">Recurrent</button>
                <button type="button" className="tag_filter tag_filter_any">Any</button>
            </Filters>

            <Content>
                <HistoryFinanceCard tagColor = "#4E41F0" title = "Aluguel" subtitle = "15/09/2020" amount = "R$ 700,00"/>
                <HistoryFinanceCard tagColor = "#4E41F0" title = "Aluguel" subtitle = "15/09/2020" amount = "R$ 700,00"/>
                <HistoryFinanceCard tagColor = "#4E41F0" title = "Aluguel" subtitle = "15/09/2020" amount = "R$ 700,00"/>
                <HistoryFinanceCard tagColor = "#4E41F0" title = "Aluguel" subtitle = "15/09/2020" amount = "R$ 700,00"/>
                <HistoryFinanceCard tagColor = "#4E41F0" title = "Aluguel" subtitle = "15/09/2020" amount = "R$ 700,00"/>
                <HistoryFinanceCard tagColor = "#4E41F0" title = "Aluguel" subtitle = "15/09/2020" amount = "R$ 700,00"/>
            </Content>
        </Container>
    );
}
export default List;