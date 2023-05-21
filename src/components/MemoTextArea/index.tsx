import * as S from './style';
import * as T from './type';

function AddTextArea({
  text,
  handleClick,
  border,
  width,
  height,
}: T.MemoTextArea) {
  return (
    <S.TextArea
      width={width}
      height={height}
      border={border}
      placeholder={text}
      onClick={handleClick}
    />
  );
}

export default AddTextArea;
