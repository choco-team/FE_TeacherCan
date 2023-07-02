import SummaryList from '@Components/SummaryList';

import * as S from './style';
import HomeMemo from '../HomeMemo';
import VacationDate from '../VacationDate';

function SideSection() {
  return (
    <S.SideSection>
      <VacationDate season="여름" date={100} />
      <HomeMemo />
      <SummaryList
        title="오늘의 급식 메뉴"
        list={['옥수수밥', '미역국', '돈까스', '김치']}
        isLoading={false}
      />
    </S.SideSection>
  );
}

export default SideSection;
