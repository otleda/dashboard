import React from 'react';
import { MdDashboard, MdAccountBalanceWallet, MdArrowUpward, MdArrowDownward, MdInput, } from 'react-icons/md';
import { Container, Header, LogoImg, MenuContainer,MenuLink } from './styles';

const Aside: React.FC = () => {

    return (
        <Container>
            <Header>
               <LogoImg />
            </Header>

            <MenuContainer>
                <MenuLink href="/dashboard">
                    <MdDashboard /> Dashboard
                </MenuLink>

                <MenuLink href="/new-register">
                     <MdAccountBalanceWallet /> New Register
                </MenuLink>

                <MenuLink href="/list/entry-balance">
                     <MdArrowUpward /> Entries
                </MenuLink>

                <MenuLink href="/list/exit-balance">
                     <MdArrowDownward /> Exits
                </MenuLink>

                <MenuLink href="/quit">
                     <MdInput /> Quit
                </MenuLink>
            </MenuContainer>
        </Container>
    );
}
export default Aside;