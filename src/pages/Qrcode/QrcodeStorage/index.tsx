import React, { useState } from 'react'; // useState 추가

import * as S from './style';
import QrcodeBlock from '../QrcodeBlock';

function QrcodeStorage() {
  const qrcodeData = [
    { id: 'qr1', url: 'https://example.com/qr1' },
    { id: 'qr2', url: 'https://example.com/qr2' },
    { id: 'qr3', url: 'https://example.com/qr3' },
    { id: 'qr4', url: 'https://example.com/qr4' },
    { id: 'qr5', url: 'https://example.com/qr5' },
    { id: 'qr6', url: 'https://example.com/qr6' },
    { id: 'qr7', url: 'https://example.com/qr7' },
    { id: 'qr8', url: 'https://example.com/qr8' },
  ];

  const [selectedQrcodes, setSelectedQrcodes] = useState([]);

  const toggleSelectAll = () => {
    if (selectedQrcodes.length < qrcodeData.length) {
      setSelectedQrcodes(qrcodeData.map((item) => item.id));
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

  const handleDownload = () => {
    // 다운로드 로직 구현
  };

  const handleViewLarger = () => {
    // 크게 보기 로직 구현
  };

  const handleDeleteQrcode = () => {
    // 삭제하기 로직 구현
  };

  return (
    <S.Container>
      <S.ButtonContainer>
        <S.Button onClick={handleViewLarger}>크게보기</S.Button>
        <S.Button>인쇄하기</S.Button>
        <S.Button onClick={handleDownload}>다운로드</S.Button>
        <S.Button onClick={handleDeleteQrcode}>삭제하기</S.Button>
      </S.ButtonContainer>
      <S.SelectAllButton onClick={toggleSelectAll}>
        {selectedQrcodes.length < qrcodeData.length ? '전체 선택' : '선택 해제'}
      </S.SelectAllButton>
      <S.QrcodeBlockContainer>
        {qrcodeData.map((item) => (
          <QrcodeBlock
            key={item.id}
            data={item}
            isSelected={selectedQrcodes.includes(item.id)}
            onToggle={() => toggleSelect(item.id)}
          />
        ))}
      </S.QrcodeBlockContainer>
    </S.Container>
  );
}

export default QrcodeStorage;
