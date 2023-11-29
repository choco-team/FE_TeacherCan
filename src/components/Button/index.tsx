import { css } from 'styled-components';

import * as S from './style';
import type { Button } from './type';

function Button({
  variant = 'primary',
  concept = 'contained',
  size = 'md',
  $style = css``,
  children,
  ...props
}: React.PropsWithChildren<Button>) {
  return (
    <S.Button
      variant={variant}
      concept={concept}
      size={size}
      $style={$style}
      {...props}
    >
      {children}
    </S.Button>
  );
}

export default Button;
