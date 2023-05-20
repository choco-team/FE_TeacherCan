import * as S from './style';

function SummaryList() {
  return (
    <S.Layout>
      <S.Title>오늘의 급식 메뉴</S.Title>
      <S.SummaryList>
        <S.SummaryItem>옥수수밥</S.SummaryItem>
        <S.SummaryItem>미역국</S.SummaryItem>
        <S.SummaryItem>돈까스</S.SummaryItem>
        <S.SummaryItem>김치</S.SummaryItem>
      </S.SummaryList>
    </S.Layout>
  );
}

export default SummaryList;
