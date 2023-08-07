import useLunchMenu from '@Hooks/api/useLunchMenu';

import SummaryList from '@Components/SummaryList';

import * as S from './style';
import HomeMemo from '../HomeMemo';
import VacationDate from '../VacationDate';

function SideSection() {
  const { lunchMenu, isLoading } = useLunchMenu();

  return (
    <S.SideSection>
      <VacationDate season="여름" date={100} />
      <HomeMemo />
      <SummaryList
        title="오늘의 급식 메뉴"
        list={lunchMenu?.map((item) => item.menu)}
        isLoading={isLoading}
      />
    </S.SideSection>
  );
}

export default SideSection;
