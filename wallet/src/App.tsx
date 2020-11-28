import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyled from './styles/GlobalStyled';

import Layout from './components/Layout';
import dark from './styles/themes/dark';

const App: React.FC = () => {
    
    return (
        <ThemeProvider theme = {dark}>
            <GlobalStyled />
            <Layout />
        </ThemeProvider>
    );
}

export default App;


