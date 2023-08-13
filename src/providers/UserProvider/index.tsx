import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import route from '@Utils/route';

import { ROUTE_PATH } from '@Constant/routePath';

type UserInfoContext = {
  email: string;
  nickname: string;
  school: {
    code: string;
    areaCode: string;
    name: string;
  };
} | null;

type UserInfoActionsContext = {
  signIn: (userInfo: UserInfoContext) => void;
  signOut: () => void;
} | null;

const UserInfoContext = createContext<UserInfoContext>(null);

const UserInfoActionsContext = createContext<UserInfoActionsContext>(null);

const UserProvider = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<UserInfoContext>(null);

  const [main] = route.getPathnames(pathname);
  const token = localStorage.getItem('token');

  const actions: UserInfoActionsContext = useMemo(
    () => ({
      signIn: (userInfo: UserInfoContext) => setUserInfo(userInfo),

      signOut: () => {
        setUserInfo(null);
        navigate(route.calculatePath([ROUTE_PATH.auth, ROUTE_PATH.signIn]));
      },
    }),
    [navigate],
  );

  const fetchUserInfo = useCallback(async () => {
    const response = await fetch('/user/info', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw Error('로그인 정보가 없습니다.');

    const data = (await response.json()) as UserInfoContext;

    actions.signIn(data);
  }, [actions, token]);

  useEffect(() => {
    if (userInfo) return;
    if (main === ROUTE_PATH.auth) return;

    if (!token) {
      navigate(route.calculatePath([ROUTE_PATH.auth, ROUTE_PATH.signIn]));
      return;
    }

    fetchUserInfo();
  }, [fetchUserInfo, main, navigate, token, userInfo]);

  return (
    <UserInfoContext.Provider value={userInfo}>
      <UserInfoActionsContext.Provider value={actions}>
        {children}
      </UserInfoActionsContext.Provider>
    </UserInfoContext.Provider>
  );
};

export default UserProvider;

export const useUserInfo = () => {
  const value = useContext(UserInfoContext);

  if (value === null) {
    return {
      isLoading: true,
    };
  }

  return {
    data: value,
    isLoading: false,
  };
};

export const useUserInfoAction = () => {
  const value = useContext(UserInfoActionsContext);

  if (value === null) {
    throw new Error('UserInfoActionsContext 에러');
  }

  return value;
};
