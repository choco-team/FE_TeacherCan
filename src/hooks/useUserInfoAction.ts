import { useContext } from 'react';

import { UserInfoActionsContext } from '@Providers/UserProvider';

const useUserInfoAction = () => {
  const userInfoActionsContext = useContext(UserInfoActionsContext);

  if (userInfoActionsContext === null) {
    throw new Error('UserInfoActionsContext 에러');
  }

  return userInfoActionsContext;
};

export default useUserInfoAction;
