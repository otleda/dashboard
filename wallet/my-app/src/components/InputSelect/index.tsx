import React from 'react';
import { Container } from './style';

interface IInputSelectProps {
    options: {
        value: string | number;
        label: string | number;
    }[]
}

const InputSelect: React.FC<IInputSelectProps> = ({options}) => {
    return (
        <Container>
            <select name="" id="">
                { 
                    options.map(option => (
                        <option value = {option.value} > {option.label} </option>
                    ))
                }
            </select>
        </Container>
    );
}

export default InputSelect;