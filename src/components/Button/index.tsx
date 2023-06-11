import * as S from './style';
import type { Button } from './type';

function Button({
  className,
  variant = 'primary',
  concept = 'contained',
  type = 'button',
  disabled = false,
  handleClick,
  width = 'auto',
  fullWidth = false,
  minWidth = '6.4rem',
  borderRadius = '3px',
  padding = '0.8rem 1.2rem',
  children,
  fontSize = '1.6rem',
  fontWeight = '600',
}: React.PropsWithChildren<Button>) {
  return (
    <S.Button
      className={className}
      variant={variant}
      concept={concept}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      width={width}
      fullWidth={fullWidth}
      minWidth={minWidth}
      borderRadius={borderRadius}
      padding={padding}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </S.Button>
  );
}

export default Button;
