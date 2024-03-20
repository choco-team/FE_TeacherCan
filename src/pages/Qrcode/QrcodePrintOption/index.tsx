import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import useModal from '@Hooks/useModal';

import Button from '@Components/Button';

import * as S from './style';
import { Container } from '../QrcodePage/style';
import QrcodePrintPage from '../QrcodePrintPage';

const QrcodePrintOption: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>('5*8');
  const { closeModal } = useModal();
  const [number, setNumber] = useState<number>(0);
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);

    if (!isNaN(newValue) && newValue >= 0) {
      setNumber(newValue);
    }
  };

  const handleSizeSelect: React.ChangeEventHandler<HTMLSelectElement> = (
    event,
  ) => {
    setSelectedSize(event.target.value);
  };

  const handleCancelBtn = () => {
    closeModal();
  };

  const handlePrintBtn = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <S.Container>
      <S.OptionContainer>
        <S.NumberSelectContainer>
          <S.NameSpan>개수 선택</S.NameSpan>
          <S.NumberContainer>
            <S.NumberInput
              type="number"
              value={number}
              onChange={handleChangeNumber}
            />
          </S.NumberContainer>
        </S.NumberSelectContainer>

        <S.SizeSelectContainer>
          <S.NameSpan>크기 선택</S.NameSpan>
          <S.SizeSelectButton>
            <select onChange={handleSizeSelect} value={selectedSize}>
              <option value="5*8">5*8</option>
              <option value="4*4">4*4</option>
              <option value="2*2">2*2</option>
              <option value="1*1">1*1</option>
            </select>{' '}
          </S.SizeSelectButton>
        </S.SizeSelectContainer>
      </S.OptionContainer>

      <Container>
        <S.Preview>
          <QrcodePrintPage ref={componentRef} selectedSize={selectedSize} />
        </S.Preview>
      </Container>
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
