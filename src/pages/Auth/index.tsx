import { Outlet } from 'react-router-dom';

import * as S from './style';

function Auth() {
  return (
    <S.Layout>
      <Outlet />
    </S.Layout>
  );
}

export default Auth;
