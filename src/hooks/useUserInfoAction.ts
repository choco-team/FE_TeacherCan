import { useContext } from 'react';

import { UserInfoActionsContext } from '@Providers/UserProvider';

export const useUserInfoAction = () => {
  const value = useContext(UserInfoActionsContext);

  if (value === null) {
    throw new Error('UserInfoActionsContext 에러');
  }

  return value;
};
