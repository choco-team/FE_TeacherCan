import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  ValidationEmailRequest,
  postEmailValidation,
  postSignIn,
  postSignUp,
} from '@Api/auth/auth';

export const useSignUp = ({ onSuccess }: { onSuccess: () => void }) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: (params: SignUpRequest) => postSignUp(params),
    onSuccess,
  });

  return { signUp: mutate, isLoading };
};

export const useSignIn = ({
  onSuccess,
}: {
  onSuccess: (data: SignInResponse) => void;
}) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: (params: SignInRequest) =>
      postSignIn(params).then((response) => response.data),
    onSuccess: (data) => onSuccess(data),
    // ErrorBoundary로 이동할 로직
    onError: (error) => {
      if (error instanceof AxiosError) {
        const status = error.response?.status;
        if (status === 401) alert('이메일 또는 비밀번호를 다시 확인해 주세요.');
      }
    },
  });

  return { signIn: mutate, isLoading };
};

export const useValidateEmail = ({ onSuccess }: { onSuccess: () => void }) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: (params: ValidationEmailRequest) => postEmailValidation(params),
    onSuccess,
    // ErrorBoundary로 이동할 로직
    onError: (error) => {
      if (error instanceof AxiosError) {
        const status = error.response?.status;
        if (status === 400) alert('이메일이 이미 존재해요.');
        if (status === 422)
          alert(
            '이메일 검증에 실패했어요. 이메일이 옳바른 형식인지 다시 확인해 주세요.',
          );
      }
    },
  });

  return { validateEmail: mutate, isLoading };
};
