import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@Styles/GlobalStyle';
import lightTheme from '@Styles/lightTheme';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
