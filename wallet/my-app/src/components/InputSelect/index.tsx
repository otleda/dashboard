import React from 'react';
import { Container } from './style';

interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[]
}

const InputSelect: React.FC <ISelectInputProps> = ({options}) => {
    return (
        <Container>
            <select name="" id="">
                { 
                    options.map(item => (
                        <option key = {item.value} value = {item.value}> {item.label} </option>
                    ))
                }
            </select>
        </Container>
    );
}

export default InputSelect;