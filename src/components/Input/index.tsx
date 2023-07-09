import * as S from './style';
import * as T from './type';

const Input = ({
  type = 'text',
  size = 'md',
  dense = size === 'sm',
  ...props
}: T.Input) => {
  return <S.Input type={type} $size={size} dense={dense} {...props} />;
};

export default Input;
