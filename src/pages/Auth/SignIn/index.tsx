import { useState } from 'react';

import route from '@Utils/route';
import { checkIsAllTextFilled } from '@Utils/validation';

import { ROUTE_PATH } from '@Constant/routePath';

import LinkText from '@Components/LinkText';

import SocialSignIn from './SocialSignIn';
import * as S from './style';
import AuthInput from '../AuthInput';

const SIGN_IN_INPUTS = [
  {
    name: 'email',
    type: 'text',
    label: '이메일',
    placeholder: '아이디를 입력하세요.',
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
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const isValid = checkIsAllTextFilled(Object.values(inputValue));

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitLoginForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <S.Layout>
      <S.Form onSubmit={handleSubmitLoginForm}>
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
          로그인
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
