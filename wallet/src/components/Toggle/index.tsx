import React from 'react';

import { 
    Container, 
    ToggleLabel,
    ToggleSelector 
} from './styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Toggle: React.FC = () => {
    return (
        <Container>
            <ToggleLabel>light</ToggleLabel>
            <ToggleSelector
                checked
                uncheckedIcon = {false}
                checkedIcon = {false}
                onChange = {()=>{}}
            />
            <ToggleLabel>dark</ToggleLabel>
        </Container>
    );
}
export  default Toggle;