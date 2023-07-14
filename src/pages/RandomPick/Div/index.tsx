import { ReactNode } from 'react';

import * as S from './style';

interface DivProps {
  children: ReactNode;
}

function Div({ children }: DivProps) {
  return <S.Div>{children}</S.Div>;
}

export default Div;
