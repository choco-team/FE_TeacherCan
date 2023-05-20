import * as S from './style';

type SummaryListProps = {
  title: string;
  list: string[];
  width?: string;
};

function SummaryList({ title, list, width = '100%' }: SummaryListProps) {
  return (
    <S.Layout width={width}>
      <S.Title>{title}</S.Title>
      <S.SummaryList>
        {list.length ? (
          list.map((summary, index) => (
            <S.SummaryItem key={index}>{summary}</S.SummaryItem>
          ))
        ) : (
          <S.NoSummaryItem>정보가 없습니다.</S.NoSummaryItem>
        )}
      </S.SummaryList>
    </S.Layout>
  );
}

export default SummaryList;
