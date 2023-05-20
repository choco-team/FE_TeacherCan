import kakaoIcon from '@Assets/image/icon/kakao.png';
import { FcGoogle } from 'react-icons/fc';
import { SiNaver } from 'react-icons/si';

import * as S from './style';

function SocialLogin() {
  return (
    <S.Layout>
      <S.Title>다른 방법으로 로그인</S.Title>
      <S.ButtonContainer>
        <S.Button>
          <img src={kakaoIcon} alt="kakao" />
        </S.Button>

        <S.Button>
          <SiNaver fill="#57B04B" size={40} />
        </S.Button>

        <S.Button>
          <FcGoogle size={48} />
        </S.Button>
      </S.ButtonContainer>
    </S.Layout>
  );
}

export default SocialLogin;
