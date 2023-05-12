import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@Styles/GlobalStyle';
import lightTheme from '@Styles/lightTheme';

import Router from './Router';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
