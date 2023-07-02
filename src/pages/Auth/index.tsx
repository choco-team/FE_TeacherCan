import { Outlet } from 'react-router-dom';

import logo from '@Assets/image/logo/teachercan-logo.png';

import * as S from './style';

function Auth() {
  return (
    <S.Layout>
      <img alt="티처캔" src={logo} width={180} />
      <Outlet />
    </S.Layout>
  );
}

export default Auth;
