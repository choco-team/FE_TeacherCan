import SkeletonSummaryList from '@Components/SummaryList/SkeletonSummaryList';
import { Suspense } from 'react';

import useUserInfo from '@Hooks/useUserInfo';

import * as S from './style';
import { SideSectionProps } from './type';
import HomeMemo from '../HomeMemo';
import TodayLunchMenu from '../TodayLunchMenu';
import VacationDate from '../VacationDate';

function SideSection({ today }: SideSectionProps) {
  const { userInfo } = useUserInfo();

  const school = userInfo?.school;

  return (
    <S.SideSection>
      <VacationDate season="여름" date={100} />
      <HomeMemo />
      <Suspense fallback={<SkeletonSummaryList title="오늘의 급식 메뉴" />}>
        {school && <TodayLunchMenu today={today} />}
      </Suspense>
    </S.SideSection>
  );
}

export default SideSection;
