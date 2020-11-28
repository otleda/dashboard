import styled from 'styled-components';

export const Container = styled.div `
    grid-area: MH;
    background: ${props => (props.theme.colors.secundary)};
`;