import styled from 'styled-components';

export const Container = styled.div `
    grid-area: MH;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    background: ${props => (props.theme.colors.secondary)};
`;

export const Profile = styled.div `
    color: ${props =>(props.theme.colors.white)};
`;
export const Welcome = styled.h3 ``;
export const UserName = styled.span ``;