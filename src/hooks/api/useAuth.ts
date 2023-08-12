import { useState } from 'react';

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signUp = async (email: string, password: string, nickname: string) => {
    setIsLoading(true);

    const response = await fetch('/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, nickname }),
    });

    if (!response.ok) throw Error('오류가 발생했습니다.');

    setIsLoading(false);
  };

  const signIn = async (email: string, password: string) => {
    const response = await fetch('/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    return (await response.json()) as {
      result: boolean;
      message: string;
      token: string;
    };
  };

  return { isLoading, signUp, signIn };
};

export default useAuth;
