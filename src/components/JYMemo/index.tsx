import * as S from './style';
import * as T from './type';

function JYMemo({
  text1,
  text2 = '',
  text3 = '',
  date = '',
  bordercolor,
  fontweight,
}: T.MemoDiv) {
  return (
    <S.MemoDiv bordercolor={bordercolor} fontweight={fontweight}>
      <S.P1>
        {date}
        {text1}
      </S.P1>
      <S.P2>{text2}</S.P2>
      <ul>
        <S.Li>{text3}</S.Li>
      </ul>
    </S.MemoDiv>
  );
}

export default JYMemo;
