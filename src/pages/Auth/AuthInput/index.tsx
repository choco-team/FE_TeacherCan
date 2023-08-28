import { useState } from 'react';
import { BiCheck, BiX } from 'react-icons/bi';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { css } from 'styled-components';

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
  validationMessage,
  isCheckedEmail,
  handleChange,
}: T.AuthInput) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisible = () => setIsPasswordVisible((prev) => !prev);

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
        {name === 'email' && (
          <S.DoubleCheckEmail>
            {true ? (
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
