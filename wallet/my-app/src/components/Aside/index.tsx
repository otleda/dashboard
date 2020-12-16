import React from 'react';
// import LogoSvg from '../../assets/logo.svg';

import {
    MdDashboard,
    MdAccountBalanceWallet,
    MdArrowUpward,
    MdArrowDownward,
    MdInput,
} from 'react-icons/md';

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
               <LogoImg />
            </Header>

            <MenuContainer>
                <MenuLink href="#">
                    <MdDashboard /> Dashboard
                </MenuLink>

                <MenuLink href="#">
                     <MdAccountBalanceWallet /> New Register
                </MenuLink>

                <MenuLink href="#">
                     <MdArrowUpward /> Entries
                </MenuLink>

                <MenuLink href="#">
                     <MdArrowDownward /> Exits
                </MenuLink>

                <MenuLink href="#">
                     <MdInput /> Quit
                </MenuLink>
            </MenuContainer>
        </Container>
    );
}
export default Aside;