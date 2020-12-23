import React from 'react';
import { Container, Content } from './styles';

import ContentHeader from '../../components/ContentHeader';
import InputSelect from '../../components/InputSelect';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';


const List: React.FC = () => {

    const optionsValue = [
        {value: 'Abril', label: 'Abril'},
        {value: 'Maio', label: 'Maio'},
        {value: 'Junho', label: 'Junho'},
        {value: 'Julho', label: 'Julho'}
    ];

    return(
        <Container>
            <ContentHeader title = "Exits" lineColor = "#E44C4E">
                <InputSelect options = {optionsValue}/>
            </ContentHeader>

            <Content>
                <HistoryFinanceCard
                    cardColor = "#303660"
                    tagColor = "#4E41F0"
                    title = "Aluguel"
                    subtitle = "15/09/2020"
                    amount = "R$ 700,00"
                />
                <HistoryFinanceCard
                    cardColor = "#303660"
                    tagColor = "#4E41F0"
                    title = "Aluguel"
                    subtitle = "15/09/2020"
                    amount = "R$ 700,00"
                />
                <HistoryFinanceCard
                    cardColor = "#303660"
                    tagColor = "#4E41F0"
                    title = "Aluguel"
                    subtitle = "15/09/2020"
                    amount = "R$ 700,00"
                />
                <HistoryFinanceCard
                    cardColor = "#303660"
                    tagColor = "#4E41F0"
                    title = "Aluguel"
                    subtitle = "15/09/2020"
                    amount = "R$ 700,00"
                />
                <HistoryFinanceCard
                    cardColor = "#303660"
                    tagColor = "#4E41F0"
                    title = "Aluguel"
                    subtitle = "15/09/2020"
                    amount = "R$ 700,00"
                />
                <HistoryFinanceCard
                    cardColor = "#303660"
                    tagColor = "#4E41F0"
                    title = "Aluguel"
                    subtitle = "15/09/2020"
                    amount = "R$ 700,00"
                />
                <HistoryFinanceCard
                    cardColor = "#303660"
                    tagColor = "#4E41F0"
                    title = "Aluguel"
                    subtitle = "15/09/2020"
                    amount = "R$ 700,00"
                />
            </Content>
        </Container>
    );
}
export default List;