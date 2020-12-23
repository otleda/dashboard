import styled from 'styled-components';
import LogoSvg from '../../assets/logo.svg';


export const Container = styled.div `
    grid-area: AS;
    background: #2D3251;
`;

export const Header = styled.header `
    position: relative;
    display: flex;
    align-items: center;
    background: #313862;
    height: 70px;
    box-shadow: -1px 2px 10px rgba(0,0,0,.1);
    border-bottom: 1px solid  rgba(0,0,0,.2);
`;

export const LogoImg = styled.img.attrs({
     src: LogoSvg, alt: 'logo Wallet - minha Carteira Virtual'
     })
     `
    position: absolute;
    width: 28%;
    margin: 0 30px;
`;

export const MenuContainer = styled.nav `
    margin-top: 50px;
    display: flex;
    flex-direction:column;
`;
export const MenuLink = styled.a `
    display: flex;
    align-items: center;
    padding-left: 2em;
    margin-bottom: 2em;
    line-height: 2em;
    width: 100%;
    height: 2em;
    border-left: 10px solid;
    color: ${ props => props.theme.colors.white };
    opacity: .7;
    transition: opacity .3s;
    
    &:hover {
        opacity: 1;
    }

    > svg {
        font-size: 1.5em;
        text-align: center;
        margin-right: .7em;

    }
`;