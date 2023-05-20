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
        {list.map((summary, index) => (
          <S.SummaryItem key={index}>{summary}</S.SummaryItem>
        ))}
      </S.SummaryList>
    </S.Layout>
  );
}

export default SummaryList;
