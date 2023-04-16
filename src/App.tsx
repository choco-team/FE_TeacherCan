import GlobalStyle from '@Styles/globalStyle';
import theme from '@Styles/theme';
import { ThemeProvider } from 'styled-components';

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
