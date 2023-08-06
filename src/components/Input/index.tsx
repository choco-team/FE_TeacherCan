import { ForwardedRef, forwardRef } from 'react';

import * as S from './style';
import * as T from './type';

const Input = (
  { type = 'text', size = 'md', dense = size === 'sm', ...props }: T.Input,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <S.Input ref={ref} type={type} $size={size} dense={dense} {...props} />
  );
};

export default forwardRef(Input);
