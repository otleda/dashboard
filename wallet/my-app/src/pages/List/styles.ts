import styled from 'styled-components';

export const Container = styled.div `

`;
export const Content = styled.div `

`;
export const Filters = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 2em;

   .tag_filter {
        font-size: 1em;
        font-weight: lighter;
        background: none;
        color: ${props => props.theme.colors.white};
        margin: 0 1em;
        opacity: .8;
        transition: opacity .2s;

        &:hover {
            opacity: 1;
        }
   }
   .tag_filter_recurrent::after {
       content: '';
       display: block;
       width: 86px;
       margin: 0 auto;
       padding-bottom: 10px;
       border-bottom: 10px solid ${props => props.theme.colors.success};
   }
   
   .tag_filter_any::after {
       content: '';
       display: block;
       width: 86px;
       margin: 0 auto;
       padding-bottom: 10px;
       border-bottom: 10px solid ${props => props.theme.colors.warning};
   }

`;