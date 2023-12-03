import QRCode from 'qrcode.react';
import { useState } from 'react';

import * as S from './style';

function QrcodeInput() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleClearClick = () => {
    setInputValue('');
  };

  const handlePrint = () => {};

  const handleDownload = () => {
    const canvas = document.querySelector('canvas');
    const url = canvas ? canvas.toDataURL('image/png') : '';
    const link = document.createElement('a');
    link.href = url;
    link.download = `qrcode.png`;
    link.click();
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
    // 크게 보기 로직 추가
  };

  const isButtonVisible = inputValue.trim() !== '';

  return (
    <S.Container>
      <h1>URL 주소를 입력해주세요.</h1>
      <S.InputContainer>
        <S.Input
          type="url"
          placeholder="www.teachercan.com"
          value={inputValue}
          onChange={handleInputChange}
        />
        <S.ClearButton onClick={handleClearClick}>새QR생성</S.ClearButton>
      </S.InputContainer>

      {isButtonVisible && <QRCode value={inputValue} size={400} />}
      {isButtonVisible && (
        <S.ButtonContainer>
          <S.Button onClick={handleViewLarger}>크게보기</S.Button>
          <S.Button onClick={handlePrint}>인쇄하기</S.Button>
          <S.Button onClick={handleDownload}>다운로드</S.Button>
          <S.Button>보관함에 저장</S.Button>
        </S.ButtonContainer>
      )}
    </S.Container>
  );
}

export default QrcodeInput;
