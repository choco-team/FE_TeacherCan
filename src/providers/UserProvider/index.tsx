import { useMutation, useQuery } from '@tanstack/react-query';
import {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import route from '@Utils/route';

import { ROUTE_PATH } from '@Constant/routePath';

import { queryClient } from '@Pages/App';

import { UserInfo } from '@Types/user';

import {
  PutUpdateUserRequest,
  requestGetUser,
  requestPutUpdateUser,
} from '@Api/user/user';

type UserInfoContext = UserInfo | null;

type UserInfoActionsContext = {
  signIn: (userInfo: UserInfoContext) => void;
  signOut: () => void;
  updateUser: (updateFiled: PutUpdateUserRequest) => void;
  isLoading: boolean;
} | null;

export const UserInfoContext = createContext<UserInfoContext>(null);

export const UserInfoActionsContext =
  createContext<UserInfoActionsContext>(null);

const UserProvider = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<UserInfoContext>(null);

  const [main] = route.getPathnames(pathname);
  // const token = sessionStorage.getItem('token');

  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: () => requestGetUser().then((response) => response.data),
    enabled: main !== ROUTE_PATH.auth,
    // ErrorBoundary로 이동해야 할까?
    // onError: () => {
    //   if (main === ROUTE_PATH.auth) return;
    //   navigate(route.calculatePath([ROUTE_PATH.auth, ROUTE_PATH.signIn]));
    //   throw Error('로그인 정보가 없습니다.');
    // },
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: (updateFiled: PutUpdateUserRequest) =>
      requestPutUpdateUser({ ...userInfo, ...updateFiled }).then(
        (response) => response.data,
      ),
    onSuccess: (data) => queryClient.setQueryData<UserInfo>(['user'], data),
  });

  const actions: UserInfoActionsContext = useMemo(
    () => ({
      signIn: (userInfo: UserInfoContext) => setUserInfo(userInfo),

      signOut: () => {
        setUserInfo(null);
        sessionStorage.removeItem('token');
        navigate(route.calculatePath([ROUTE_PATH.auth, ROUTE_PATH.signIn]));
      },

      updateUser: mutate,
      isLoading,
    }),
    [isLoading, mutate, navigate],
  );

  useEffect(() => {
    if (data) actions.signIn(data);
  }, [actions, data]);

  // useEffect(() => {
  //   if (!token) {
  //     navigate(route.calculatePath([ROUTE_PATH.auth, ROUTE_PATH.signIn]));
  //     return;
  //   }
  // }, [navigate, token]);

  return (
    <UserInfoContext.Provider value={userInfo}>
      <UserInfoActionsContext.Provider value={actions}>
        {children}
      </UserInfoActionsContext.Provider>
    </UserInfoContext.Provider>
  );
};

export default UserProvider;
