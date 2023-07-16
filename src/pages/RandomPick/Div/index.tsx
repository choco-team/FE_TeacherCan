import { ReactNode } from 'react';

import * as S from './style';

interface DivProps {
  children?: ReactNode;
  alignItems?: string;
  justifyContent?: string;
}

function Div({ children, alignItems, justifyContent }: DivProps) {
  return (
    <S.Div alignItems={alignItems} justifyContent={justifyContent}>
      {children}
    </S.Div>
  );
}

export default Div;
