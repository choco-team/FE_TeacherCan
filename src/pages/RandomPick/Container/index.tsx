import { ReactNode } from 'react';

import * as S from './style';

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return <S.Container>{children}</S.Container>;
}

export default Container;
