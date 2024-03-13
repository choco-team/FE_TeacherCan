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
    queryFn: () => getUser().then((response) => response.data.data),
    enabled: main !== ROUTE_PATH.auth && !!token,
    useErrorBoundary: true,
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: (updateFiled: PutUpdateUserRequest) =>
      putUpdateUser({ ...userInfo, ...updateFiled }).then(
        (response) => response.data,
      ),
    onSuccess: (data) =>
      queryClient.setQueryData<UserInfo>(['user'], data.data),
    useErrorBoundary: true,
  });

  const actions: UserInfoActionsContext = useMemo(
    () => ({
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
    if (token) return;

    navigate(route.calculatePath([ROUTE_PATH.auth, ROUTE_PATH.signIn]));
  }, [navigate, token]);

  useEffect(() => {
    if (data) setUserInfo(data);
  }, [data]);

  return (
    <UserInfoContext.Provider value={userInfo}>
      <UserInfoActionsContext.Provider value={actions}>
        {children}
      </UserInfoActionsContext.Provider>
    </UserInfoContext.Provider>
  );
};

export default UserProvider;
