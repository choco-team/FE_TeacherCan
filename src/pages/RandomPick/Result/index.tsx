import * as S from './style';
import { ResultContainerLayout } from './type';

function Result({ children }: ResultContainerLayout) {
  return (
    <S.ResultContainer>
      뽑힌 사람은 {children.join(', ')} 입니다.
    </S.ResultContainer>
  );
}

export default Result;
