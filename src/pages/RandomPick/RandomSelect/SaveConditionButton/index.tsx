import { Button } from '@Components/Button/type';
import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons';

import * as S from './style';

type SaveConditionButtonProps = Button & {
  Icon?: IconType;
  string: string;
  marginRight?: string;
  marginLeft?: string;
  onClick?: MouseEventHandler;
};

function SaveConditionButton({
  Icon,
  string,
  marginRight,
  marginLeft,
  onClick,
}: SaveConditionButtonProps) {
  return (
    <S.Layout onClick={onClick}>
      <S.SaveConditionButton marginRight={marginRight} marginLeft={marginLeft}>
        <S.Layout>
          <S.IconWrapper>{Icon && <Icon size="2.2rem" />}</S.IconWrapper>
          {string}
        </S.Layout>
      </S.SaveConditionButton>
    </S.Layout>
  );
}

export default SaveConditionButton;
