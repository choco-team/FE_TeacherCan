import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@Styles/GlobalStyle';
import theme from '@Styles/theme';

import Router from './Router';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
