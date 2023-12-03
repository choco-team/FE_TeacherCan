import { useLunchMenuList } from '@Hooks/query/school/useLunchMenu';

import dateFunctions from '@Utils/date';

import SummaryList from '@Components/SummaryList';

function TodayLunchMenu({ today }: { today: Date }) {
  const { lunchMenuList } = useLunchMenuList({
    date: dateFunctions.getToday(today),
    type: 'day',
  });

  const menus = lunchMenuList.length
    ? lunchMenuList[0].menu?.map((item) => item.dish)
    : [];

  return (
    <SummaryList
      title="오늘의 급식 메뉴"
      list={menus}
      guideMessage="오늘은 급식이 없어요."
    />
  );
}

export default TodayLunchMenu;
