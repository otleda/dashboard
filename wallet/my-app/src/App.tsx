import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyled from './styles/GlobalStyled';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import List from './pages/List';

import dark from './styles/themes/dark';

const App: React.FC = () => {
    
    return (
        <ThemeProvider theme = {dark}>
            <GlobalStyled />
            <Layout>
                {/* <Dashboard /> */}
                <List />
            </Layout>
        </ThemeProvider>
    );
}

export default App;


