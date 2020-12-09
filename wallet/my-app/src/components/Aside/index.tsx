import React from 'react';
import LogoSvg from '../../assets/logo.svg';

import { 
    Container, 
    Header,
    LogoImg,
    MenuContainer,
    MenuLink

} from './styles';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
               <LogoImg src = {LogoSvg}/>
            </Header>

            <MenuContainer>
                <MenuLink href="#">
                    Dashboard
                </MenuLink>
                <MenuLink href="#">
                    New Register
                </MenuLink>
                <MenuLink href="#">
                    Entries
                </MenuLink>
                <MenuLink href="#">
                    Exits
                </MenuLink>
                <MenuLink href="#">
                    Quit
                </MenuLink>
            </MenuContainer>
        </Container>
    );
}
export default Aside;