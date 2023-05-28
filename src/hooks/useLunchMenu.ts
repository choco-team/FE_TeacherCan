import { useEffect, useState } from 'react';

import { SuccessLunchMenuRoot, FailLunchMenuRoot } from '@Types/lunchMenu';

import useFetch from './useFetch';

const LUNCH_MENU_OPEN_NEIS_URL =
  'https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=954dac30b088454d9a95700f044ce620&Type=json&pIndex=1&pSize=100&';

type SchoolInfoType = {
  areaCode: string;
  schoolCode: string;
  date: number;
};

const useLunchMenu = (schoolInfo: SchoolInfoType) => {
  const [menu, setMenu] = useState<string[] | undefined>();
  const [error, setError] = useState<string | undefined>();

  const { data, loading, reFetchData } = useFetch<
    SuccessLunchMenuRoot | FailLunchMenuRoot
  >(
    LUNCH_MENU_OPEN_NEIS_URL +
      `ATPT_OFCDC_SC_CODE=${schoolInfo.areaCode}&SD_SCHUL_CODE=${schoolInfo.schoolCode}&MLSV_YMD=${schoolInfo.date}`,
  );

  const updateSchoolInfo = (updateSchoolInfo: Partial<SchoolInfoType>) => {
    const newSchoolInfo = { ...schoolInfo, ...updateSchoolInfo };

    reFetchData(
      LUNCH_MENU_OPEN_NEIS_URL +
        `ATPT_OFCDC_SC_CODE=${newSchoolInfo.areaCode}&SD_SCHUL_CODE=${newSchoolInfo.schoolCode}&MLSV_YMD=${newSchoolInfo.date}`,
    );
  };

  const progressSetMenu = () => {
    if (!data) return;

    if ('RESULT' in data) {
      setError('등록된 정보가 없습니다.');

      return;
    }

    const { DDISH_NM } = data.mealServiceDietInfo[1].row[0];

    setMenu(
      DDISH_NM.split('<br/>').map((item: string) => {
        return item.replace(/[0-9.()\s]/g, '');
      }),
    );
  };

  useEffect(() => {
    progressSetMenu();
  }, [data]);

  return { loading, menu, error, updateSchoolInfo };
};

export default useLunchMenu;
