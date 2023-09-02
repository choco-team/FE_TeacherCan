import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { css } from 'styled-components';

import useAuth from '@Hooks/query/auth/useAuth';

import route from '@Utils/route';
import { checkIsAllTextFilled } from '@Utils/validation';

import { ROUTE_PATH } from '@Constant/routePath';

import CircularProgress from '@Components/CircularProgress';
import LinkText from '@Components/LinkText';

import theme from '@Styles/theme';

import SocialSignIn from './SocialSignIn';
import * as S from './style';
import AuthInput from '../AuthInput';

const SIGN_IN_INPUTS = [
  {
    name: 'email',
    type: 'text',
    label: '이메일',
    placeholder: '이메일을 입력하세요.',
    autocomplete: 'on',
  },
  {
    name: 'password',
    type: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요.',
    autocomplete: 'current-password',
  },
] as const;

function SignIn() {
  const navigate = useNavigate();

  const { isLoading, signIn } = useAuth();

  const { state } = useLocation() as {
    state: null | { email: string; password: string };
  };

  const [inputValue, setInputValue] = useState({
    email: state ? state.email : '',
    password: state ? state.password : '',
  });

  const isValid = checkIsAllTextFilled(Object.values(inputValue));

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitSignInForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const { email, password } = inputValue;

    const { result, token } = await signIn(email, password);

    if (result) {
      sessionStorage.setItem('token', token);
      navigate(route.calculatePath([ROUTE_PATH.main]));
    }
  };

  return (
    <S.Layout>
      <S.Form onSubmit={handleSubmitSignInForm}>
        {SIGN_IN_INPUTS.map(
          ({ name, type, label, placeholder, autocomplete }) => (
            <AuthInput
              key={name}
              name={name}
              type={type}
              label={label}
              placeholder={placeholder}
              autocomplete={autocomplete}
              value={inputValue[name]}
              handleChange={handleChangeInputValue}
            />
          ),
        )}
        <S.SubmitButton
          type="submit"
          variant="primary"
          fullWidth
          disabled={!isValid}
        >
          {isLoading ? (
            <CircularProgress
              $style={css`
                border: 2px solid ${theme.color.white};
                border-color: ${theme.color.white} transparent transparent
                  transparent;
              `}
            />
          ) : (
            '로그인'
          )}
        </S.SubmitButton>
      </S.Form>

      <S.LinkContainer>
        {/* TODO: 아이디/비밀번호 찾기 기능 개발 후 수정 예정 */}
        <LinkText text="아이디/비밀번호 찾기" linkTo="/" />
        <LinkText
          text="티처캔 회원가입"
          linkTo={route.calculatePath([ROUTE_PATH.auth, ROUTE_PATH.signUp])}
        />
      </S.LinkContainer>

      <SocialSignIn />
    </S.Layout>
  );
}

export default SignIn;
