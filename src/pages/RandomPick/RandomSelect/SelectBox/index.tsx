import { IconType } from 'react-icons';

import * as S from './style';

type SelectBoxProps = {
  Icon: IconType;
  String: string;
  marginRight?: string;
  marginLeft?: string;
};

function SelectBox({ Icon, String, marginRight, marginLeft }: SelectBoxProps) {
  return (
    <S.Layout>
      <S.SelectBox marginRight={marginRight} marginLeft={marginLeft}>
        <S.Layout>
          <S.IconWrapper>{Icon && <Icon size="2.2rem" />}</S.IconWrapper>
          {String}
        </S.Layout>
      </S.SelectBox>
    </S.Layout>
  );
}

export default SelectBox;
