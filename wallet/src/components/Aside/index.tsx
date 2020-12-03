import React from 'react';
import LogoSvg from '../../assets/logo.svg';

import { 
    Container, 
    Header,
    LogoImg
} from './styles';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
               <LogoImg src = {LogoSvg}/>
            </Header>
        </Container>
    );
}
export default Aside;