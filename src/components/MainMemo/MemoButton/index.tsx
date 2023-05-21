import * as S from './style';
import * as T from './type';

function MemoButton({
  variant,
  type,
  text,
  handleClick,
  activeColor,
  activeText,
}: T.MemoButton) {
  return (
    <S.Button
      type={type}
      variant={variant}
      onClick={handleClick}
      activeColor={activeColor}
      activeText={activeText}
    >
      {text}
    </S.Button>
  );
}

export default MemoButton;
