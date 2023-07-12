import React from 'react';

import * as S from './style';

interface ResultProps {
  result: React.ReactNode;
}

function Result({ result }: ResultProps) {
  return (
    <S.ResultContainer>
      뽑힌 사람은 {React.Children.toArray(result).join(', ')} 입니다.
    </S.ResultContainer>
  );
}

export default Result;
