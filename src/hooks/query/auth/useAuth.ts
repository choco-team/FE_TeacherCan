import { useMutation } from '@tanstack/react-query';

import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  ValidationEmailRequest,
  postEmailValidation,
  postSignIn,
  postSignUp,
} from '@Api/auth/auth';
import { APIError } from '@Api/common';

export const useSignUp = ({ onSuccess }: { onSuccess: () => void }) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: (params: SignUpRequest) => postSignUp(params),
    onSuccess,
    onError: (error) => {
      if (error instanceof APIError) {
        alert(error.message);
      }
    },
  });

  return { signUp: mutate, isLoading };
};

export const useSignIn = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: SignInResponse) => void;
  onError: () => void;
}) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: (params: SignInRequest) =>
      postSignIn(params).then((response) => response.data),
    onSuccess: (data) => onSuccess(data),
    onError: (error) => {
      if (error instanceof APIError) onError();
    },
  });

  return { signIn: mutate, isLoading };
};

export const useValidateEmail = ({ onSuccess }: { onSuccess: () => void }) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: (params: ValidationEmailRequest) => postEmailValidation(params),
    onSuccess,
    onError: (error) => {
      if (error instanceof APIError) {
        alert(error.message);
      }
    },
  });

  return { validateEmail: mutate, isLoading };
};
