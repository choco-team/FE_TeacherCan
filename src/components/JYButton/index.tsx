// import { Button } from '@Styles/common';

import * as S from './style';
import * as T from './type';

function JYButton({
  text1,
  text2,
  backgroundColor,
  activeColor,
  handleClick,
  color,
}: T.Button) {
  const onClick = () => {
    handleClick();
  };

  return (
    <S.Button
      type="button"
      backgroundColor={backgroundColor}
      activeColor={activeColor}
      color={color}
      onClick={onClick}
    >
      {text1}
      <S.Boldspan>{text2}</S.Boldspan>
    </S.Button>
  );
}

export default JYButton;
