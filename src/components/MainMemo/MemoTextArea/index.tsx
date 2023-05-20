import * as S from './style';
import * as T from './type';

function AddTextArea({ text, handleClick, border }: T.MemoTextArea) {
  const onClick = () => {
    handleClick();
  };
  return (
    <S.TextArea
      border={border}
      placeholder={text}
      onClick={onClick}
    ></S.TextArea>
  );
}

export default AddTextArea;
