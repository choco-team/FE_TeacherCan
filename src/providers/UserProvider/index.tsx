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

import { queryClient } from '@Providers/QueryProvider';

import { UserInfo } from '@Types/user';

import { getUser, putUpdateUser } from '@Api/user/user';
import type { PutUpdateUserRequest } from '@Api/user/user';

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
  const token = sessionStorage.getItem('token');

  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser().then((response) => response.data),
    enabled: main !== ROUTE_PATH.auth,
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: (updateFiled: PutUpdateUserRequest) =>
      putUpdateUser({ ...userInfo, ...updateFiled }).then(
        (response) => response.data.data,
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
    if (!data) return;

    if (data.result) actions.signIn(data.data);
    else navigate(route.calculatePath([ROUTE_PATH.auth, ROUTE_PATH.signIn]));
  }, [actions, data, navigate]);

  useEffect(() => {
    if (!token) {
      navigate(route.calculatePath([ROUTE_PATH.auth, ROUTE_PATH.signIn]));
      return;
    }
  }, [navigate, token]);

  return (
    <UserInfoContext.Provider value={userInfo}>
      <UserInfoActionsContext.Provider value={actions}>
        {children}
      </UserInfoActionsContext.Provider>
    </UserInfoContext.Provider>
  );
};

export default UserProvider;
