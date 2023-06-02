import * as S from './style';
import * as T from './type';

function MemoTextArea({
  text,
  handleClick,
  border,
  width,
  height,
  color,
}: T.MemoTextArea) {
  return (
    <S.TextArea
      text={text}
      width={width}
      height={height}
      border={border}
      placeholder={text}
      onClick={handleClick}
      color={color}
    />
  );
}

export default MemoTextArea;
