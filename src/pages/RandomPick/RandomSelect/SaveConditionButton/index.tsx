import { IconType } from 'react-icons';

import * as S from './style';

interface SaveConditionButtonProps {
  Icon: IconType;
  String: string;
  marginRight?: string;
  marginLeft?: string;
}

function SaveConditionButton({
  Icon,
  String,
  marginRight,
  marginLeft,
}: SaveConditionButtonProps) {
  return (
    <S.Layout>
      <S.SaveConditionButton marginRight={marginRight} marginLeft={marginLeft}>
        <S.Layout>
          <S.IconWrapper>{Icon && <Icon size="2.2rem" />}</S.IconWrapper>
          {String}
        </S.Layout>
      </S.SaveConditionButton>
    </S.Layout>
  );
}

export default SaveConditionButton;
