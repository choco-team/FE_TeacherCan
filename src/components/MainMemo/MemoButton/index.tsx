import * as S from './style';
import * as T from './type';

function MemoButton({
  variant,
  type,
  text,
  handleClick,
  activeColor,
  activeText,
  width,
  height,
}: T.MemoButton) {
  const onClick = () => {
    handleClick();
  };

  return (
    <S.Button
      type={type}
      variant={variant}
      onClick={onClick}
      activeColor={activeColor}
      activeText={activeText}
      width={width}
      height={height}
    >
      {text}
    </S.Button>
  );
}

export default MemoButton;
