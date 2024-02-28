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
  const [selectedNumber, setSelectedNumber] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleNumberSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNumber(Number(event.target.value));
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <S.Container>
      <S.NumberSelectContainer>
        <S.NameSpan>개수 선택</S.NameSpan>
        <select value={selectedNumber} onChange={handleNumberSelect}>
          {Array.from({ length: 100 }, (_, i) => i + 1).map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </S.NumberSelectContainer>

      <S.SizeSelectContainer>
        <S.NameSpan>크기 선택</S.NameSpan>
        {['4x8', '4x4', '2x2', '1x1'].map((size) => (
          <S.SizeSelectButton
            key={size}
            onClick={() => handleSizeSelect(size)}
            isSelected={selectedSize === size}
          >
            {size === '4x8' && <TfiLayoutGrid4Alt />}
            {size === '4x4' && <TfiLayoutGrid3Alt />}
            {size === '2x2' && <TfiLayoutGrid2Alt />}
            {size === '1x1' && <FaSquare />}
          </S.SizeSelectButton>
        ))}
      </S.SizeSelectContainer>

      <Button>인쇄</Button>
    </S.Container>
  );
};

export default QrcodePrintOption;
