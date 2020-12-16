import styled from 'styled-components';

export const Container = styled.div `
    grid-area: MH;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background: ${props => (props.theme.colors.secondary)};
`;

export const Profile = styled.div `
    color: ${props =>(props.theme.colors.white)};
`;
export const Welcome = styled.h4 `
    font-weight: 400;
`;
export const UserName = styled.p `
    color: rgba(255,255,255, .5);
    font-size: .9em;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 5px 0;
`;