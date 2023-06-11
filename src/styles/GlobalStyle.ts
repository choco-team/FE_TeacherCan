import { createGlobalStyle } from 'styled-components';

import resetStyle from './resetStyle';

const GlobalStyle = createGlobalStyle`
  ${resetStyle}

  * {
    box-sizing: border-box;
  }
  
  html {
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
