import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyled from './styles/GlobalStyled';

import dark from './styles/themes/dark';
import Routes from './routers';

const App: React.FC = () => {
    
    return (
        <ThemeProvider theme = {dark}>
            <GlobalStyled />
            <Routes />
        </ThemeProvider>
    );
}
export default App;


