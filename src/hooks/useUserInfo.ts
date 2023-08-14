import { useContext } from 'react';

import { UserInfoContext } from '@Providers/UserProvider';

export const useUserInfo = () => {
  const value = useContext(UserInfoContext);

  if (value === null) {
    return {
      data: null,
    };
  }

  return {
    data: value,
  };
};
