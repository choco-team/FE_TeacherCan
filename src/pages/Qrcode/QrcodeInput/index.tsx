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

  const handlePrint = () => {
    // 인쇄 기능 구현 로직 추가
  };

  const handleDownload = () => {
    // 다운로드 기능 구현 로직 추가
  };

  const handleSaveToStorage = () => {
    // 저장 기능 구현 로직 추가
  };

  const isButtonVisible = inputValue.trim() !== '';

  return (
    <S.Container>
      <S.StorageButton onClick={handlePrint}>보관함</S.StorageButton>

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
          <S.Button onClick={handlePrint}>인쇄하기</S.Button>
          <S.Button onClick={handleDownload}>다운로드</S.Button>
          <S.Button onClick={handleSaveToStorage}>보관함에 저장</S.Button>
        </S.ButtonContainer>
      )}
    </S.Container>
  );
}

export default QrcodeInput;
