import React from 'react';
import GlobalStyled from './styles/GlobalStyled';

import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
    
    return (
        <>
            < GlobalStyled />
            < Dashboard />
        </>
    );

}

export default App;