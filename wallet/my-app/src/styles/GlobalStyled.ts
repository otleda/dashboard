import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `

    * {
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        font-family: 'Roboto', sans-serif;
         
    } 

    input, button {
        border: none;
        outline: none;
    } 

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
