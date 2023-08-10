import { useState } from 'react';

import check from '@Assets/image/checked/check.png';
import emptybox from '@Assets/image/checked/empty.png';

import * as S from './style';

type RadioBoxProps = {
  name: string;
  childrenOne?: React.ReactNode;
  childrenTwo?: React.ReactNode;
};

function RadioBox({ name, childrenOne, childrenTwo }: RadioBoxProps) {
  const [isSelected, setisSelected] = useState(true);
  const [isNonSelected, setIsNonSelected] = useState(false);
  const handleRadioBoxChange = () => {
    setisSelected(!isSelected);
    setIsNonSelected(!isNonSelected);
    console.log('clicked!');
  };

  return (
    <S.Layout>
      <S.Label>
        <S.RadioBox type="radio" name={name} onClick={handleRadioBoxChange} />
        <S.IconContainer>
          <img
            src={isSelected ? check : emptybox}
            alt={childrenOne as string}
          />
          {childrenOne}
        </S.IconContainer>
      </S.Label>
      <S.Label>
        <S.RadioBox type="radio" name={name} onClick={handleRadioBoxChange} />
        <S.IconContainer>
          <img
            src={isNonSelected ? check : emptybox}
            alt={childrenTwo as string}
          />
          {childrenTwo}
        </S.IconContainer>
      </S.Label>
    </S.Layout>
  );
}

export default RadioBox;
