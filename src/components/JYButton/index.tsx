// import { Button } from '@Styles/common';

import * as S from './style';
import * as T from './type';

function JYButton({
  text,
  backgroundColor,
  activeColor,
  handleClick,
}: T.Button) {
  const onClick = () => {
    handleClick();
  };

  return (
    <S.Button
      type="button"
      backgroundColor={backgroundColor}
      activeColor={activeColor}
      onClick={onClick}
    >
      {text}
    </S.Button>
  );
}

export default JYButton;
