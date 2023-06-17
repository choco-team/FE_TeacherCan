import { Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import route from '@Utils/route';

import { ROUTE_PATH } from '@Constant/routePath';

import GlobalStyle from '@Styles/GlobalStyle';
import lightTheme from '@Styles/lightTheme';

import Header from './Header';
import SideNavLink from './SideNavLink';
import * as S from './style';

function App() {
  const { pathname } = useLocation();
  const [main] = route.getPathnames(pathname);

  if (main === 'auth') {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={lightTheme}>
          <Outlet />
        </ThemeProvider>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Header pathname={pathname} />
        <S.DefaultPageLayout>
          {pathname !== route.calculatePath([ROUTE_PATH.main]) && (
            <SideNavLink pathname={pathname} />
          )}
          <Outlet />
        </S.DefaultPageLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
