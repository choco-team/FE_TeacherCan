import { useContext } from 'react';

import { UserInfoContext } from '@Providers/UserProvider';

const useUserInfo = () => {
  const userInfo = useContext(UserInfoContext);

  return { userInfo };
};

export default useUserInfo;
