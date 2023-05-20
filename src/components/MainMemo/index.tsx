import * as S from './style';
import * as T from './type';

function MemoDiv({ text, css }: T.MemoDiv) {
  return (
    <S.Div css={css} text={text}>
      {text}
    </S.Div>
  );
}

export default MemoDiv;
