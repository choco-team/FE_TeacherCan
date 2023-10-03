import { useState } from 'react';
import { BiCheck, BiX } from 'react-icons/bi';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { css } from 'styled-components';

import { useValidateEmail } from '@Hooks/query/auth/useAuth';

import CircularProgress from '@Components/CircularProgress';

import * as S from './style';
import * as T from './type';

function AuthInput({
  name,
  type = 'text',
  label,
  placeholder = '',
  autocomplete = 'off',
  value,
  required = false,
  isValid,
  isSignUp,
  validationMessage,
  isCheckedEmail,
  setIsCheckedEmail,
  handleChange,
}: T.AuthInput) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { validateEmail, isLoading } = useValidateEmail({
    onSuccess: () => {
      if (setIsCheckedEmail) setIsCheckedEmail(true);
    },
  });

  const togglePasswordVisible = () => setIsPasswordVisible((prev) => !prev);

  const handleClickDoubleCheckEmail = () => {
    if (!setIsCheckedEmail || isCheckedEmail) return;

    const emailRegExp = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailRegExp.test(value)) return;

    validateEmail({ email: value });
  };

  return (
    <S.Label>
      <S.LabelHeader>
        <S.LabelContent>
          {label}
          {required && <S.Required>*</S.Required>}
        </S.LabelContent>
        {value &&
          (isValid ? (
            <S.CheckIcon />
          ) : (
            <S.ValidationMessage>{validationMessage}</S.ValidationMessage>
          ))}
      </S.LabelHeader>

      <S.InputWrapper>
        <S.AuthInput
          name={name}
          value={value}
          type={isPasswordVisible ? 'text' : type}
          placeholder={placeholder}
          autoComplete={autocomplete}
          spellCheck={false}
          onChange={handleChange}
        />
        {type === 'password' && (
          <S.EyeButton type="button" onClick={togglePasswordVisible}>
            {isPasswordVisible ? <BsEyeSlashFill /> : <BsEyeFill />}
          </S.EyeButton>
        )}
        {name === 'email' && isSignUp && (
          <S.DoubleCheckEmail onClick={handleClickDoubleCheckEmail}>
            {isLoading ? (
              <CircularProgress
                size="x-small"
                $style={css`
                  margin-right: 20px;
                `}
              />
            ) : (
              <>
                {!isCheckedEmail && '중복확인'}
                <S.DoubleCheckIcon isCheckedEmail={isCheckedEmail}>
                  {isCheckedEmail ? <BiCheck /> : <BiX />}
                </S.DoubleCheckIcon>
              </>
            )}
          </S.DoubleCheckEmail>
        )}
      </S.InputWrapper>
    </S.Label>
  );
}

export default AuthInput;
