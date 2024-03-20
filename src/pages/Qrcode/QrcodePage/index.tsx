import React, { useState } from 'react';

import * as S from './style';
import QrcodeInput from '../QrcodeInput';
import QrcodeStorage from '../QrcodeStorage';

function QrcodePage() {
  const [isInStorageMode, setIsInStorageMode] = useState<boolean>(false);
  const handleToStorage = () => {
    setIsInStorageMode(!isInStorageMode);
  };

  return (
    <S.Container>
      <S.StorageButton onClick={handleToStorage}>
        {isInStorageMode ? '새 QR 코드 생성' : '보관함'}
      </S.StorageButton>

      {isInStorageMode ? (
        <QrcodeStorage
          isInStorageMode={isInStorageMode}
          setIsInStorageMode={setIsInStorageMode}
        />
      ) : (
        <QrcodeInput />
      )}
    </S.Container>
  );
}

export default QrcodePage;
