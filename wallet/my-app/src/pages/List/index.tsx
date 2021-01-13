import React, { useMemo, useState, useEffect } from 'react';
import { Container, Content, Filters } from './styles';

import ContentHeader from '../../components/ContentHeader';
import InputSelect from '../../components/InputSelect';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import gains from '../../database/gains';
import expenses from '../../database/expenses';

interface IRouteParams {
    match: { 
        params: {
            type: string;
        } 
    }
}

interface IData { 
    id: string;  
    descriptionTitle: string;
    amountFormatted:string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC <IRouteParams> = ({ match }) => {

    const [data, setData] = useState <IData[]> ([]);                                                                                                   

    const {type} = match.params;

    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entries' : 'Exits'
    },[type]); 

    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#4E41F0' : '#E44C4E'
    },[type]); 

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    },[type]);

    useEffect(() => {
       const response =  listData.map((item ) => {
            return {
                id: String( Math.random() * data.length ),
                descriptionTitle: item.description,
                amountFormatted:item.amount,
                frequency: item.frequency,
                dateFormatted: item.date,
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }
        })
        setData(response);
    },[ listData, data ]);

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
            <ContentHeader title={title} lineColor = {lineColor} >
                <InputSelect options = {months}/>
                <InputSelect options = {years}/>
            </ContentHeader>

            <Filters>
                <button type="button" className="tag_filter tag_filter_recurrent">Recurrent</button>
                <button type="button" className="tag_filter tag_filter_any">Any</button>
            </Filters>

            <Content>
                { 
                    data.map(item => ( 
                        <HistoryFinanceCard 
                            key = {item.id} 
                            tagColor = {item.tagColor} 
                            title = {item.descriptionTitle} 
                            subtitle = {item.dateFormatted} 
                            amount = {item.amountFormatted}
                        />
                    ))  
                }
            </Content>
        </Container>
    );
}
export default List;