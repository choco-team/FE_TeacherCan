import QRCode from 'qrcode.react';
import { useState } from 'react';

import * as S from './style';

function QrcodeInput() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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

  const isButtonVisible = inputValue.trim() !== ''; // 입력값이 있는지 여부를 판단

  return (
    <S.Container>
      <h1>URL 주소를 입력해주세요.</h1>
      <S.Input
        type="url"
        placeholder="www.teachercan.com"
        value={inputValue}
        onChange={handleInputChange}
      />
      {isButtonVisible && <QRCode value={inputValue} />}
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
