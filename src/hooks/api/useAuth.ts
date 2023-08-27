import { useState } from 'react';

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signUp = async (email: string, password: string, nickname: string) => {
    setIsLoading(true);

    const response = await fetch('http://13.124.68.20/api/auth/signup', {
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
    setIsLoading(true);

    const response = await fetch('/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 400) {
      setIsLoading(false);
      throw Error('이메일 또는 비밀번호를 다시 확인해 주세요.');
    }

    if (!response.ok) {
      setIsLoading(false);
      throw Error('오류가 발생했습니다.');
    }

    setIsLoading(false);

    return (await response.json()) as {
      result: boolean;
      message: string;
      token: string;
    };
  };

  return { isLoading, signUp, signIn };
};

export default useAuth;
