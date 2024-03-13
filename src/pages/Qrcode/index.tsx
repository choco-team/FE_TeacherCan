import { useState } from 'react';

import QrCodeInput from './QrCodeInput';
import QrCodeStorage from './QrCodeStorage';
import * as S from './style';

function QrCode() {
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
        <QrCodeStorage
          isInStorageMode={isInStorageMode}
          setIsInStorageMode={setIsInStorageMode}
        />
      ) : (
        <QrCodeInput />
      )}
    </S.Container>
  );
}

export default QrCode;
