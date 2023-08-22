import useLunchMenu from '@Hooks/api/useLunchMenu';

import SummaryList from '@Components/SummaryList';

import * as S from './style';
import { SideSectionProps } from './type';
import HomeMemo from '../HomeMemo';
import VacationDate from '../VacationDate';

function SideSection({ today }: SideSectionProps) {
  const { isLoading, lunchMenu } = useLunchMenu(today, 'day');

  const menus = lunchMenu ? lunchMenu[0].menu.map((item) => item.dish) : [];

  return (
    <S.SideSection>
      <VacationDate season="여름" date={100} />
      <HomeMemo />
      <SummaryList
        title="오늘의 급식 메뉴"
        list={menus}
        isLoading={isLoading}
        guideMessage={
          !lunchMenu
            ? '프로필에서 학교를 등록해보세요.'
            : '오늘은 급식이 없어요.'
        }
      />
    </S.SideSection>
  );
}

export default SideSection;
