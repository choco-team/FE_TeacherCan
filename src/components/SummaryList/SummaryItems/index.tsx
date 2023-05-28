import * as S from './style';
import type { SummaryList } from '../type';

function SummaryItems({
  list,
  isLoading,
  guideMessage,
}: Pick<SummaryList, 'list' | 'isLoading' | 'guideMessage'>) {
  if (isLoading) {
    return (
      <>
        {Array.from({ length: 4 }).map((_, index) => (
          <S.SummaryItem key={index}>
            <S.SummaryText isLoading={isLoading}>Loading</S.SummaryText>
          </S.SummaryItem>
        ))}
      </>
    );
  }

  if (!list) {
    return (
      <S.NoSummaryItem>
        <S.NoSummaryMessage>정보가 없습니다.</S.NoSummaryMessage>
        <S.NoSummaryGuideMessage>{guideMessage}</S.NoSummaryGuideMessage>
      </S.NoSummaryItem>
    );
  }

  return (
    <>
      {list.map((summary, index) => (
        <S.SummaryItem key={index}>
          <S.SummaryText>{summary}</S.SummaryText>
        </S.SummaryItem>
      ))}
    </>
  );
}

export default SummaryItems;
