import { ReactNode } from 'react';

import * as S from './style';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <S.Layout>{children}</S.Layout>;
}

export default Layout;
