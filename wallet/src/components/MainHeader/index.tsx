import React from 'react';
import { Container, Profile, Welcome, UserName } from './styles';

const MainHeader: React.FC = () => {
    return(
        <Container>
            toggle
            <Profile>
                <Welcome>Ola, </Welcome>
                <UserName>Adelto Oliveira</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;