import useFetch from '@Hooks/api/useFetch';

type User = {
  statusCode: number;
  data: {
    userId: string;
    nickName: string;
    schoolName: string;
    schoolCode: string;
    areaCode: string;
  };
};

type PendingUser = {
  data: undefined;
  isLoading: true;
};

type FulfilledUser = {
  data: User;
  isLoading: false;
};

const useMe = () => {
  const { data, isLoading } = useFetch<User>('/user/info');

  return { data, isLoading } as PendingUser | FulfilledUser;
};

export default useMe;
