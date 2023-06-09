import React, { useState } from 'react';

import route from '@Utils/route';

import { ROUTE_PATH } from '@Constant/routePath';

import LinkText from '@Components/LinkText';

import * as S from './style';
import AuthInput from '../AuthInput';

const SIGN_UP_INPUTS = [
  {
    name: 'id',
    type: 'text',
    label: '아이디',
    placeholder: '아이디를 입력하세요.',
    autocomplete: 'off',
    validationMessage: '영어(숫자 포함 가능) 6~15자로 입력해주세요.',
  },
  {
    name: 'password',
    type: 'password',
    label: '비밀번호',
    placeholder: '영어, 숫자, 특수문자 포함 8자 이상',
    autocomplete: 'new-password',
    validationMessage: '영어, 숫자, 특수문자 포함 8~20자로 입력해주세요.',
  },
  {
    name: 'passwordConfirmation',
    type: 'password',
    label: '비밀번호 확인',
    placeholder: '비밀번호를 한 번 더 입력하세요.',
    autocomplete: 'new-password',
    validationMessage: '동일한 비밀번호를 입력해주세요.',
  },
  {
    name: 'userName',
    type: 'text',
    label: '이름(닉네임)',
    placeholder: '멋진 이름을 지어주세요.',
    autocomplete: 'off',
    validationMessage: '한글/영어/숫자 2~10자로 입력해주세요.',
  },
] as const;

const validate = (inputValue: Record<string, string>) => {
  const regExp = {
    // 아이디: 영어 1글자 포함 영어/숫자 6~15자
    id: /^(?=.*[a-zA-Z])[a-zA-Z0-9]{6,15}$/,
    // 비밀번호: 영어 대소문자+숫자+특수문자 8~20자
    password:
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]{8,20}$/,
    // 닉네임: 한글/영어/숫자 2~10자
    userName: /^[가-힣a-zA-Z0-9]{2,10}$/,
  } as const;

  const { id, password, passwordConfirmation, userName } = inputValue;

  return {
    id: regExp.id.test(id),
    password: regExp.password.test(password),
    passwordConfirmation:
      !!passwordConfirmation && password === passwordConfirmation,
    userName: regExp.userName.test(userName),
  };
};

function SignUp() {
  const [inputValue, setInputValue] = useState({
    id: '',
    password: '',
    passwordConfirmation: '',
    userName: '',
  });

  const validation = validate(inputValue);
  const isAllValid = Object.values(validation).every((isValid) => isValid);

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
        {SIGN_UP_INPUTS.map(
          ({
            name,
            type,
            label,
            placeholder,
            autocomplete,
            validationMessage,
          }) => (
            <AuthInput
              key={name}
              name={name}
              type={type}
              label={label}
              placeholder={placeholder}
              autocomplete={autocomplete}
              value={inputValue[name]}
              isValid={validation[name]}
              validationMessage={validationMessage}
              required
              handleChange={handleChangeInputValue}
            />
          ),
        )}
        <S.SubmitButton
          type="submit"
          variant="primary"
          disabled={!isAllValid}
          fullWidth
        >
          회원가입
        </S.SubmitButton>
      </S.Form>

      <LinkText
        text="이미 계정이 있으신가요? 로그인"
        linkTo={route.calculatePath([ROUTE_PATH.auth, ROUTE_PATH.signIn])}
      />
    </S.Layout>
  );
}

export default SignUp;
