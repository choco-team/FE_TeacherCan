import SummaryItems from './SummaryItems';
import * as S from './style';
import type { SummaryList } from './type';

function SummaryList({
  title,
  list,
  guideMessage,
  isLoading,
  width = '100%',
}: SummaryList) {
  return (
    <S.Layout width={width}>
      <S.Title>{title}</S.Title>
      <S.SummaryList>
        <SummaryItems
          list={list}
          isLoading={isLoading}
          guideMessage={guideMessage}
        />
      </S.SummaryList>
    </S.Layout>
  );
}

export default SummaryList;
