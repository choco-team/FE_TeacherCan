import * as S from './style';
import * as T from './type';

function MemoDiv({ text }: T.MemoDiv) {
  return <S.Div text={text}>{text}</S.Div>;
}

export default MemoDiv;
