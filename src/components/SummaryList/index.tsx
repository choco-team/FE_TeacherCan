import * as S from './style';
import type { SummaryList } from './type';

function SummaryList({
  title,
  list,
  guideMessage,
  width = '100%',
}: SummaryList) {
  return (
    <S.Layout width={width}>
      <S.Title>{title}</S.Title>
      <S.SummaryList>
        {!list ? (
          Array.from({ length: 4 }).map((_, index) => (
            <S.SummaryItem key={index}>
              <S.SummaryText isLoading>Loading</S.SummaryText>
            </S.SummaryItem>
          ))
        ) : list.length ? (
          list.map((summary, index) => (
            <S.SummaryItem key={index}>
              <S.SummaryText>{summary}</S.SummaryText>
            </S.SummaryItem>
          ))
        ) : (
          <S.NoSummaryItem>
            <S.NoSummaryMessage>정보가 없습니다.</S.NoSummaryMessage>
            <S.NoSummaryGuideMessage>{guideMessage}</S.NoSummaryGuideMessage>
          </S.NoSummaryItem>
        )}
      </S.SummaryList>
    </S.Layout>
  );
}

export default SummaryList;
