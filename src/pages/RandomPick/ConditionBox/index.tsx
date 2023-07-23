import { IconType } from 'react-icons';

import StyledConditionBox from './style';
import * as S from './style';

interface ConditionBoxProps {
  Icon: IconType;
  String: string;
  disableCursor: boolean;
  marginRight?: string;
  marginLeft?: string;
}

function ConditionBox({
  Icon,
  String,
  disableCursor,
  marginRight,
  marginLeft,
}: ConditionBoxProps) {
  return (
    <S.Layout>
      <StyledConditionBox
        disableCursor={disableCursor}
        marginRight={marginRight}
        marginLeft={marginLeft}
      >
        <S.Layout>
          <S.IconWrapper>{Icon && <Icon size="2.2rem" />}</S.IconWrapper>
          {String}
        </S.Layout>
      </StyledConditionBox>
    </S.Layout>
  );
}

export default ConditionBox;
