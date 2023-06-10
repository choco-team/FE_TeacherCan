import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from '@Components/Header';

import GlobalStyle, { DefaultPageLayout } from '@Styles/GlobalStyle';
import lightTheme from '@Styles/lightTheme';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Header />
        <DefaultPageLayout>
          <Outlet />
        </DefaultPageLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
