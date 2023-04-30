import * as S from './style';

type InputProps = {
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  color?: 'basic' | 'accent';
};

function Input({
  type = 'text',
  placeholder,
  color = 'basic',
  ...props
}: InputProps) {
  return (
    <S.Input type={type} placeholder={placeholder} color={color} {...props} />
  );
}

export default Input;
