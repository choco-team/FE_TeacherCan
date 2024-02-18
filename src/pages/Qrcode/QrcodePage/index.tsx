import React, { useState } from 'react';

import * as S from './style';
import QrcodeInput from '../QrcodeInput';
import QrcodeStorage from '../QrcodeStorage';

function QrcodePage() {
  const [isInStorageMode, setIsInStorageMode] = useState(false);
  const handleToStorage = () => {
    setIsInStorageMode(!isInStorageMode); // isInStorageMode 상태 토글
  };

  return (
    <S.Container>
      {/* isInStorageMode 상태에 따라 다른 버튼 텍스트를 보여줌 */}
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
