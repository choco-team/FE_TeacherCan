import { useState } from 'react';
import { FaSquare } from 'react-icons/fa';
import {
  TfiLayoutGrid4Alt,
  TfiLayoutGrid2Alt,
  TfiLayoutGrid3Alt,
} from 'react-icons/tfi';

import useModal from '@Hooks/useModal';

import Button from '@Components/Button';

import * as S from './style';

const QrcodePrintOption: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const { closeModal } = useModal();
  const [number, setNumber] = useState<number>(0);

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);

    if (!isNaN(newValue) && newValue >= 0) {
      setNumber(newValue);
    }
  };
  const increment = () => setNumber((prevNumber) => prevNumber + 1);
  const decrement = () => {
    setNumber((prevNumber) => (prevNumber > 0 ? prevNumber - 1 : 0));
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleCancelBtn = () => {
    closeModal();
  };

  const handlePrintBtn = () => {};

  return (
    <S.Container>
      <S.NumberSelectContainer>
        <S.NameSpan>개수 선택</S.NameSpan>
        <S.NumberContainer>
          <S.NumberInput
            type="number"
            value={number}
            onChange={handleChangeNumber}
          />
          <div>
            <S.NumberUpdownButton onClick={increment}>△</S.NumberUpdownButton>
            <S.NumberUpdownButton onClick={decrement}>▽</S.NumberUpdownButton>
          </div>
        </S.NumberContainer>
      </S.NumberSelectContainer>

      <S.SizeSelectContainer>
        <S.NameSpan>크기 선택</S.NameSpan>
        {['5x8', '4x4', '2x2', '1x1'].map((size) => (
          <S.SizeSelectButton
            key={size}
            onClick={() => handleSizeSelect(size)}
            isSelected={selectedSize === size}
          >
            {size === '5x8' && <TfiLayoutGrid4Alt />}
            {size === '4x4' && <TfiLayoutGrid3Alt />}
            {size === '2x2' && <TfiLayoutGrid2Alt />}
            {size === '1x1' && <FaSquare />}
          </S.SizeSelectButton>
        ))}
      </S.SizeSelectContainer>
      <S.SmallButtonWrapper>
        <Button concept="text" variant="gray" onClick={handleCancelBtn}>
          취소
        </Button>
        <Button onClick={handlePrintBtn}>인쇄</Button>
      </S.SmallButtonWrapper>
    </S.Container>
  );
};

export default QrcodePrintOption;
