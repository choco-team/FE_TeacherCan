import { useState } from 'react';

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signUp = async (email: string, password: string, nickname: string) => {
    setIsLoading(true);

    const response = await fetch(
      'https://teachercan.ssambox.com/api/auth/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, nickname }),
      },
    );

    if (!response.ok) throw Error('오류가 발생했습니다.');

    setIsLoading(false);
  };

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);

    const response = await fetch(
      'https://teachercan.ssambox.com/api/auth/signin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      },
    );

    setIsLoading(false);

    if (response.status === 400)
      throw Error('이메일 또는 비밀번호를 다시 확인해 주세요.');

    if (!response.ok) throw Error('오류가 발생했습니다.');

    return (await response.json()) as {
      result: boolean;
      message: string;
      token: string;
    };
  };

  const isEmailPossible = async (email: string) => {
    setIsLoading(true);

    const response = await fetch(
      'https://teachercan.ssambox.com/api/auth/signup/validation',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      },
    );

    setIsLoading(false);

    if (response.status === 400)
      return {
        ok: false,
        message: '이메일이 이미 존재해요.',
      };

    if (response.status === 422) {
      return {
        ok: false,
        message:
          '이메일 검증에 실패했어요. 이메일이 옳바른 형식인지 다시 확인해 주세요.',
      };
    }

    return {
      ok: true,
    };
  };

  return { isLoading, signUp, signIn, isEmailPossible };
};

export default useAuth;
