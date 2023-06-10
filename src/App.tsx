import { Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import route from '@Utils/route';

import { ROUTE_PATH } from '@Constant/routePath';

import Header from '@Components/Header';
import SideNavLink from '@Components/SideNavLink';

import GlobalStyle, { DefaultPageLayout } from '@Styles/GlobalStyle';
import lightTheme from '@Styles/lightTheme';

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Header pathname={pathname} />
        <DefaultPageLayout>
          {pathname !== route.calculatePath([ROUTE_PATH.main]) && (
            <SideNavLink pathname={pathname} />
          )}
          <Outlet />
        </DefaultPageLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
