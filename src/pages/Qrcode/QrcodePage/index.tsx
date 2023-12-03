import { useState } from 'react';

import * as S from './style';
import QrcodeInput from '../QrcodeInput';
import QrcodeStorage from '../QrcodeStorage';

function QrcodePage() {
  const [isInStorageMode, setIsInStorageMode] = useState(false);
  const handleToStorage = () => {
    setIsInStorageMode(true);
  };

  return (
    <S.Container>
      {!isInStorageMode && (
        <S.StorageButton onClick={handleToStorage}>보관함 </S.StorageButton>
      )}

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
