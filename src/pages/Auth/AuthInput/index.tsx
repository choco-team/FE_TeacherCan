import { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

import * as S from './style';
import * as T from './type';

const INPUT_TYPE = {
  email: {
    type: 'email',
    label: '이메일',
    placeholder: 'teachercan@email.com',
  },
  password: {
    type: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요.',
  },
};

function AuthInput({ type }: T.AuthInput) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisible = () => setIsPasswordVisible((prev) => !prev);

  return (
    <S.Label>
      {INPUT_TYPE[type].label}
      <S.InputWrapper>
        <S.AuthInput
          name={type}
          type={isPasswordVisible ? 'text' : type}
          placeholder={INPUT_TYPE[type].placeholder}
        />
        {type === 'password' && (
          <S.EyeButton onClick={togglePasswordVisible}>
            {isPasswordVisible ? <BsEyeSlashFill /> : <BsEyeFill />}
          </S.EyeButton>
        )}
      </S.InputWrapper>
    </S.Label>
  );
}

export default AuthInput;
