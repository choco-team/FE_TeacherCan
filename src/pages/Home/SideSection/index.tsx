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
      <Suspense fallback={<div>Loading...</div>}>
        {school && <TodayLunchMenu today={today} />}
      </Suspense>
    </S.SideSection>
  );
}

export default SideSection;
