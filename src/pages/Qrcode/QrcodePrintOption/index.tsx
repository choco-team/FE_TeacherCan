import { useState } from 'react';
import { FaSquare } from 'react-icons/fa';
import {
  TfiLayoutGrid4Alt,
  TfiLayoutGrid2Alt,
  TfiLayoutGrid3Alt,
} from 'react-icons/tfi';

import Button from '@Components/Button';

import * as S from './style';

const QrcodePrintOption: React.FC = () => {
  return (
    <S.Container>
      <S.NameSpan>개수 선택</S.NameSpan>
      <S.NumberSelectContainer></S.NumberSelectContainer>

      <S.NameSpan>크기 선택</S.NameSpan>
      <S.SizeSelectContainer>
        <S.SizeSelectButton>
          <TfiLayoutGrid4Alt />
        </S.SizeSelectButton>
        <S.SizeSelectButton>
          <TfiLayoutGrid3Alt />
        </S.SizeSelectButton>
        <S.SizeSelectButton>
          <TfiLayoutGrid2Alt />
        </S.SizeSelectButton>
        <S.SizeSelectButton>
          <FaSquare />
        </S.SizeSelectButton>
      </S.SizeSelectContainer>

      <Button>인쇄</Button>
    </S.Container>
  );
};

export default QrcodePrintOption;
