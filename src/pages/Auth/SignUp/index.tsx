import React, { useState } from 'react';

import ROUTE_PATH from '@Constant/routePath';

import LinkText from '@Components/LinkText';

import * as S from './style';
import AuthInput from '../AuthInput';

const INPUT_NAMES = [
  'id',
  'password',
  'passwordConfirmation',
  'userName',
] as const;

function SignUp() {
  const [inputValue, setInputValue] = useState({
    id: '',
    password: '',
    passwordConfirmation: '',
    userName: '',
  });

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return inputValue;
  };

  return (
    <S.Layout>
      <S.Heading>반가워요, 선생님.</S.Heading>
      <S.Description>회원가입에 필요한 정보를 입력해 주세요.</S.Description>

      <S.Form onSubmit={onSubmit}>
        {INPUT_NAMES.map((name) => (
          <AuthInput
            key={name}
            name={name}
            value={inputValue[name]}
            handleChange={handleChangeInputValue}
          />
        ))}
        <S.SubmitButton name="submit">회원가입</S.SubmitButton>
      </S.Form>

      <LinkText
        text="이미 계정이 있으신가요? 로그인"
        linkTo={ROUTE_PATH.signIn}
      />
    </S.Layout>
  );
}

export default SignUp;
