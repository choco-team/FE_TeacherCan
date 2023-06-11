import { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

import * as S from './style';
import * as T from './type';

const INPUT_TYPE = {
  userName: {
    type: 'text',
    label: '이름',
    placeholder: '이름을 입력하세요.',
  },
  email: {
    type: 'email',
    label: '이메일',
    placeholder: 'teachercan@email.com',
  },
  password: {
    type: 'password',
    label: '비밀번호',
    placeholder: '영어, 숫자, 특수문자 포함 8자 이상 비밀번호를 입력하세요.',
  },
  passwordConfirmation: {
    type: 'password',
    label: '비밀번호 확인',
    placeholder: '비밀번호를 한 번 더 입력하세요.',
  },
};

function AuthInput({ name }: T.AuthInput) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { type, label, placeholder } = INPUT_TYPE[name];

  const togglePasswordVisible = () => setIsPasswordVisible((prev) => !prev);

  return (
    <S.Label>
      {label}
      <S.InputWrapper>
        <S.AuthInput
          name={name}
          type={isPasswordVisible ? 'text' : type}
          placeholder={placeholder}
          spellCheck={false}
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
