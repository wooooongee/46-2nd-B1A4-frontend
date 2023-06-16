import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.cdnfonts.com/css/circular-std');

    * {
    box-sizing: border-box;
    font-family: 'Circular Std', sans-serif;
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
