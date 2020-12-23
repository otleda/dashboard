import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyled from './styles/GlobalStyled';

import Layout from './components/Layout';
import List from './pages/List';

import dark from './styles/themes/dark';

const App: React.FC = () => {
    
    return (
        <ThemeProvider theme = {dark}>
            <GlobalStyled />
            <Layout>
                <List />
            </Layout>
        </ThemeProvider>
    );
}

export default App;


