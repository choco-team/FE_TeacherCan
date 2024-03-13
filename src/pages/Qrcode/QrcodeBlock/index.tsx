import React, { useState } from 'react';

import * as S from './style';

const QrcodeBlock = () => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <S.Storage onClick={toggleSelection} isSelected={isSelected}>
      <S.ImageContainer>
        <img
          src="data:image/png;base64,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"
          alt="QR Code"
        />
      </S.ImageContainer>
      <S.TextContainer>
        <S.TextSpan>패들렛으로 만들었던 학생작품</S.TextSpan>
        <S.TextSpan>
          https://nyjyangji.padlet.org/soave4242/4-1-2-6tsejdfooh969wo3
        </S.TextSpan>
      </S.TextContainer>
    </S.Storage>
  );
};

export default QrcodeBlock;
