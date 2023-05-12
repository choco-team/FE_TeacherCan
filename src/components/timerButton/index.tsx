import { useState } from 'react';

import * as S from './style';
import * as T from './type';

function TimerBtn({ text, backgroundColor = '#9b9191' }: T.TimerBtn) {
  const [isSelect, setIsSelect] = useState(false);

  const handleButtonClick = () => {
    setIsSelect((prevIsSelect) => !prevIsSelect);
  };

  const btnBackgroundColor = isSelect ? '#FA8D8D' : backgroundColor;

  return (
    <S.TimerBtn
      backgroundColor={btnBackgroundColor}
      isSelect={isSelect}
      onClick={handleButtonClick}
    >
      {text}
    </S.TimerBtn>
  );
}

export default TimerBtn;
