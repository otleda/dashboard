import styled from 'styled-components';

export const Container = styled.div `
    grid-area: CT;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.primary};
    padding: 30px;

    height: cal(100vh - 70px);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.white};
        height: 20px;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.secondary};
    }
`;