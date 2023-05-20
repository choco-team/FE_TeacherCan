import Input from './Input';
import LinkText from './LinkText';
import SocialLogin from './SocialLogin';
import * as S from './style';

function Login() {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <S.Layout>
      <S.Form onSubmit={onSubmit}>
        <Input type="email" />
        <Input type="password" />
        <S.SubmitButton type="submit">로그인</S.SubmitButton>
      </S.Form>

      <S.LinkContainer>
        <LinkText text="이메일/비밀번호를 잊어버렸어요" />
        <LinkText text="계정이 없으신가요? 회원가입" />
      </S.LinkContainer>

      <SocialLogin />
    </S.Layout>
  );
}

export default Login;
