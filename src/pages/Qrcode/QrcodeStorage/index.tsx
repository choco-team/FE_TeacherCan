import React from 'react';

import * as S from './style';

function QrcodeStorage({
  setIsInStorageMode,
  isInStorageMode,
}: {
  setIsInStorageMode: (value: boolean) => void;
  isInStorageMode: boolean;
}) {
  const handleToStorage = () => {
    setIsInStorageMode(false);
  };
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
  return (
    <S.Container>
      <h1>저장된 큐알코드 보기</h1>
      <S.ButtonContainer>
        <S.Button onClick={handleToStorage}>새QR코드생성</S.Button>
        <S.Button onClick={handleViewLarger}>크게보기</S.Button>
        <S.Button>인쇄하기</S.Button>
        <S.Button onClick={handleDownload}>다운로드</S.Button>
        <S.Button onClick={handleDownload}>삭제하기</S.Button>
      </S.ButtonContainer>
      <h1>큐알블럭</h1>
    </S.Container>
  );
}

export default QrcodeStorage;
