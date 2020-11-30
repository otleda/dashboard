import React, { useMemo } from 'react';
import emojis from  '../../utilities/emojis';

import { Container, Profile, Welcome, UserName } from './styles';

const MainHeader: React.FC = () => {

    const emoji = useMemo(()=>{
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    },[]);

    return(
        <Container>
            toggle
            <Profile>
                <Welcome>Ola, {emoji}</Welcome>
                <UserName>Adelto Oliveira</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;