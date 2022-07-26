import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-bor;  
    }
    *,button,input{
        font-family: Roboto, sans-serif;

    }
    :root {
        --color-primary: #0d2f81;
        --color-secondary: #ffe7aa;
        --color-tertiary: #fff;
        --color-quartenary: #000;
      
        --color-blue: #0061ff;
        --color-border: #bdc4c9;
      }
`;