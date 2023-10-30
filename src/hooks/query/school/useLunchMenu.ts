import { useQuery } from '@tanstack/react-query';

import { LunchMenuListRequest, getLunchMenuList } from '@Api/school/lunchMenu';

export const useLunchMenuList = (
  lunchMenuListRequest: LunchMenuListRequest,
) => {
  const { data: lunchMenuList, isLoading } = useQuery({
    queryKey: ['lunchMenuList', lunchMenuListRequest],
    queryFn: () =>
      getLunchMenuList(lunchMenuListRequest).then((response) => response.data),
  });

  const getOrigins = () => {
    if (!lunchMenuList) return [];

    const originsMap = new Map();
    lunchMenuList.data
      .flatMap((item) => item.origin)
      .forEach(({ ingredient, place }) => {
        originsMap.set(ingredient, place);
      });

    const originsObject = Object.fromEntries(originsMap.entries());

    return Object.entries<string>(originsObject);
  };

  return {
    lunchMenuList: lunchMenuList?.data || [],
    origins: getOrigins(),
    isLoading,
  };
};
