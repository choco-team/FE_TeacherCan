import React, { useState } from 'react'; // useState 추가

import * as S from './style';
import QrCodeBlock from '../QrCodeBlock';

function QrCodeStorage() {
  const qrCodeData = [
    { id: 'qr1', url: 'https://example.com/qr1' },
    { id: 'qr2', url: 'https://example.com/qr2' },
    { id: 'qr3', url: 'https://example.com/qr3' },
    { id: 'qr4', url: 'https://example.com/qr4' },
    { id: 'qr5', url: 'https://example.com/qr5' },
    { id: 'qr6', url: 'https://example.com/qr6' },
    { id: 'qr7', url: 'https://example.com/qr7' },
    { id: 'qr8', url: 'https://example.com/qr8' },
  ];

  const [selectedQrCodes, setSelectedQrcodes] = useState([]);

  const toggleSelectAll = () => {
    if (selectedQrCodes.length < qrCodeData.length) {
      setSelectedQrcodes(qrCodeData.map((item) => item.id));
    } else {
      setSelectedQrcodes([]);
    }
  };

  const toggleSelect = (id) => {
    setSelectedQrcodes((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((qrId) => qrId !== id)
        : [...prevSelected, id],
    );
  };

  function handleDownload() {
    // 다운로드 로직 구현
  }

  // const handleViewLarger = () => {
  //     const qrCodeDataURL = "www.google.com"
  //     const newWindow = window.open(qrCodeDataURL, 'qrcodePopup');
  //     if (newWindow) {
  //       newWindow.document.write(`
  //         <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
  //           <img src="${qrCodeDataURL}" style="max-width: 100%; max-height: 100%;" />
  //         </div>
  //       `);
  //     }

  //   // 크게 보기 로직 구현
  // };

  const handleViewLarger = () => {
    const newWindow = window.open('', 'qrcodePopup');
    if (newWindow) {
      newWindow.document.write(`
        <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; height: 100vh;">
      `);

      selectedQrCodes.forEach((selectedId) => {
        const qrCodeItem = qrCodeData.find((item) => item.id === selectedId);
        if (qrCodeItem) {
          newWindow.document.write(`
            <div style="margin: 10px;">
              <img src="${qrCodeItem.url}" style="max-width: 100%; max-height: 100%;" />
            </div>
          `);
        }
      });

      newWindow.document.write(`</div>`);
    }
  };

  const handleDeleteQrCode = () => {
    // 삭제하기 로직 구현
  };

  return (
    <S.Container>
      <S.ButtonContainer>
        <S.SelectAllButton onClick={toggleSelectAll}>
          {selectedQrCodes.length < qrCodeData.length
            ? '전체 선택'
            : '선택 해제'}
        </S.SelectAllButton>
        <S.Button onClick={handleViewLarger}>크게보기</S.Button>
        <S.Button>인쇄하기</S.Button>
        <S.Button onClick={handleDownload}>다운로드</S.Button>
        <S.Button onClick={handleDeleteQrCode}>삭제하기</S.Button>
      </S.ButtonContainer>

      <S.QrCodeBlockContainer>
        {qrCodeData.map((item) => (
          <QrCodeBlock
            onClick={() => onToggle(data.id)}
            key={item.id}
            data={item.url}
            isSelected={selectedQrCodes.includes(item.id)}
            onToggle={() => toggleSelect(item.id)}
          />
        ))}
      </S.QrCodeBlockContainer>
    </S.Container>
  );
}

export default QrCodeStorage;
