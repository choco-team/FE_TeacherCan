import { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

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
          <S.EyeButton onClick={togglePasswordVisible}>
            {isPasswordVisible ? <BsEyeSlashFill /> : <BsEyeFill />}
          </S.EyeButton>
        )}
      </S.InputWrapper>
    </S.Label>
  );
}

export default AuthInput;
