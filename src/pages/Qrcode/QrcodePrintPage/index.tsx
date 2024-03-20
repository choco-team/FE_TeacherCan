import React, { useState } from 'react';

import * as S from './style';

// eslint-disable-next-line react/display-name
const QrcodePrintPage = React.forwardRef<
  HTMLDivElement,
  { selectedSize: string }
>((props, ref) => {
  const qrCodes = [
    { id: 1, content: '  1' },
    { id: 2, content: '  2' },
    { id: 3, content: '  3' },
    { id: 4, content: '  4' },
    { id: 5, content: '  5' },
    { id: 6, content: '  6' },
    { id: 7, content: '  7' },
    { id: 8, content: '  8' },
    { id: 9, content: '  9' },
    { id: 10, content: '  10' },
    { id: 1, content: '  1' },
    { id: 2, content: '  2' },
    { id: 3, content: '  3' },
    { id: 4, content: '  4' },
    { id: 5, content: '  5' },
    { id: 6, content: '  6' },
    { id: 7, content: '  7' },
    { id: 8, content: '  8' },
    { id: 9, content: '  9' },
    { id: 10, content: '  10' },
    { id: 1, content: '  1' },
    { id: 2, content: '  2' },
    { id: 3, content: '  3' },
    { id: 4, content: '  4' },
    { id: 5, content: '  5' },
    { id: 6, content: '  6' },
    { id: 7, content: '  7' },
    { id: 8, content: '  8' },
    { id: 9, content: '  9' },
    { id: 10, content: '  10' },
    { id: 1, content: '  1' },
    { id: 2, content: '  2' },
    { id: 3, content: '  3' },
    { id: 4, content: '  4' },
    { id: 5, content: '  5' },
    { id: 6, content: '  6' },
    { id: 7, content: '  7' },
    { id: 8, content: '  8' },
    { id: 9, content: '  9' },
    { id: 10, content: '  10' },
  ];
  return (
    <S.GridContainer ref={ref} selectedSize={props.selectedSize}>
      {qrCodes.map((qrCode) => (
        <S.GridItem key={qrCode.id}>
          <div>{qrCode.content}</div>
        </S.GridItem>
      ))}
    </S.GridContainer>
  );
});

export default QrcodePrintPage;
