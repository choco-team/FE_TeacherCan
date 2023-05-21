import { createGlobalStyle } from 'styled-components';

import resetStyle from './resetStyle';

const GlobalStyle = createGlobalStyle`
  ${resetStyle}

  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

  input[type=password] {
    font-family: monospace;

    &::placeholder {
      font-family: auto;
    }
  }
`;

export default GlobalStyle;
