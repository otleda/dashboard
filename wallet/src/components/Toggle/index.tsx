import React from 'react';
import  Switch from 'react-switch';

import { 
    Container, 
    ToggleLabel 
} from './styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Toggle: React.FC = () => {
    return (
        <Container>
            <ToggleLabel>light</ToggleLabel>
            <Switch 
                checked
                onChange = {()=>{}}
            />
            <ToggleLabel>dark</ToggleLabel>
        </Container>
    );
}
export  default Toggle;