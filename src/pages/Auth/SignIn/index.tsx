import { useState } from 'react';

import route from '@Utils/route';
import validation from '@Utils/validation';

import { ROUTE_PATH } from '@Constant/routePath';

import LinkText from '@Components/LinkText';

import SocialSignIn from './SocialSignIn';
import * as S from './style';
import AuthInput from '../AuthInput';

function SignIn() {
  const [inputValue, setInputValue] = useState({
    id: '',
    password: '',
  });

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validation.checkIsAllTextFilled(Object.values(inputValue));
    if (!isValid) return;
  };

  return (
    <S.Layout>
      <S.Form onSubmit={onSubmit}>
        <AuthInput
          name="id"
          value={inputValue.id}
          handleChange={handleChangeInputValue}
        />
        <AuthInput
          name="password"
          value={inputValue.password}
          handleChange={handleChangeInputValue}
        />
        <S.SubmitButton type="submit">로그인</S.SubmitButton>
      </S.Form>

      <S.LinkContainer>
        {/* TODO: 이메일/비밀번호 찾기 기능 개발 후 수정 예정 */}
        <LinkText text="이메일/비밀번호를 잊어버렸어요" linkTo="/" />
        <LinkText
          text="계정이 없으신가요? 회원가입"
          linkTo={route.calculatePath([ROUTE_PATH.auth, ROUTE_PATH.signUp])}
        />
      </S.LinkContainer>

      <SocialSignIn />
    </S.Layout>
  );
}

export default SignIn;
