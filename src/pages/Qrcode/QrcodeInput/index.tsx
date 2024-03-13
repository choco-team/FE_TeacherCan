import QRCode from 'qrcode.react';
import React, { useState } from 'react';

import useModal from '@Hooks/useModal';

import * as S from './style';
import QrcodeName from '../QrcodeName';
import QrcodePrintOption from '../QrcodePrintOption';

function QrcodeInput() {
  const [inputValue, setInputValue] = useState<string>('');

  const { isOpen, openModal, closeModal } = useModal();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClearClick = () => {
    setInputValue('');
  };

  const handleDownload = () => {
    const canvas = document.querySelector('canvas');
    const url = canvas ? canvas.toDataURL('image/png') : '';
    const link = document.createElement('a');
    link.href = url;
    link.download = `qrcode.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewLarger = () => {
    const canvas = document.querySelector('canvas');
    const qrCodeDataURL = canvas ? canvas.toDataURL('image/png') : '';
    const newWindow = window.open(qrCodeDataURL, 'qrcodePopup');
    if (newWindow) {
      newWindow.document.write(`
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
          <img src="${qrCodeDataURL}" style="max-width: 100%; max-height: 100%;" />
        </div>
      `);
    }
  };

  const handleGoToLink = () => {
    if (inputValue) {
      const url =
        inputValue.startsWith('http://') || inputValue.startsWith('https://')
          ? inputValue
          : `https://${inputValue}`;
      window.open(url, '_blank');
    }
  };

  const isButtonVisible = inputValue.trim() !== '';

  return (
    <S.Container>
      <S.InputContainer>
        <S.Input
          type="url"
          placeholder="www.teachercan.com"
          value={inputValue}
          onChange={handleInputChange}
        />
        <S.ClearButton onClick={handleClearClick}>새 QR 생성</S.ClearButton>
      </S.InputContainer>

      {isButtonVisible && <QRCode value={inputValue} size={400} />}
      {isButtonVisible && (
        <S.ButtonContainer>
          <S.Button onClick={handleViewLarger}>크게보기</S.Button>
          <S.Button onClick={() => openModal(<QrcodePrintOption />)}>
            인쇄하기
          </S.Button>
          <S.Button onClick={handleDownload}>다운로드</S.Button>
          <S.Button onClick={handleGoToLink}>바로가기</S.Button>
          <S.Button onClick={() => openModal(<QrcodeName />)}>
            보관함에 저장
          </S.Button>
        </S.ButtonContainer>
      )}
      {isOpen && <QrcodeName />}
    </S.Container>
  );
}

export default QrcodeInput;
