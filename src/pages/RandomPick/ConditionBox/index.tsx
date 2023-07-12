import StyledConditionBox from './style';
import * as S from './style';
import type { ConditionBox } from './type';

function ConditionBox({ Icon }: ConditionBox) {
  return (
    <StyledConditionBox>
      <S.Layout>
        {Icon && <Icon size="2.2rem" />}
        조건설정
      </S.Layout>
    </StyledConditionBox>
  );
}

export default ConditionBox;
