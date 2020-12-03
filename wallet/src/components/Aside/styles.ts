import styled from 'styled-components';

export const Container = styled.div `
    grid-area: AS;
    background: #2D3251;
`;

export const Header = styled.div `
    position: relative;
    display: flex;
    align-items: center;
    background: #313862;
    height: 70px;
    box-shadow: -1px 2px 10px rgba(0,0,0,.1);
    border-bottom: 1px solid  rgba(0,0,0,.2);


`;
export const LogoImg = styled.img`
    position: absolute;
    width: 30%;
    margin: 0 30px;
`;