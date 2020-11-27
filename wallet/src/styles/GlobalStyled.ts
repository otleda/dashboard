import {createGlobalStyle } from 'styled-components';

export default createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: violet;
    }

    html, body, #root {
        height: 100%;
        font-family: 'Roboto', sans-serif;
    }

    button, input {
        border: none;
        outline: none;
    }

    button  {
        cursor: pointer;
    }
    
`