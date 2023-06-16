import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

    * {
    box-sizing: border-box;
    }

    body{
        font-family: 'Circular Std';
    }
    
    a {
    outline: none;
    text-decoration: none;
    }

    html {
    position: relative;
    min-height: 100%;
    }

`;

export default GlobalStyle;
