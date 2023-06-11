import ROUTE_PATH from '@Constant/routePath';

import LinkText from '@Components/LinkText';

import * as S from './style';
import AuthInput from '../AuthInput';

function SignUp() {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <S.Layout>
      <S.Heading>반가워요, 선생님.</S.Heading>
      <S.Description>회원가입에 필요한 정보를 입력해 주세요.</S.Description>

      <S.Form onSubmit={onSubmit}>
        <AuthInput name="userName" />
        <AuthInput name="email" />
        <AuthInput name="password" />
        <AuthInput name="passwordConfirmation" />
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
