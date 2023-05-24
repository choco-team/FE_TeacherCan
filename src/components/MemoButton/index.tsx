import * as S from './style';
import * as T from './type';

function Button({
  variant,
  type,
  disabled,
  handleClick,
  width,
  height,
  borderRadius,
  border,
  activeBorder,
  backgroundColor,
  activeColor,
  text,
  color,
  activeText,
  textAlign,
  fontSize,
  fontWeight,
}: T.StyledButton) {
  return (
    <S.Button
      variant={variant}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      width={width}
      height={height}
      borderRadius={borderRadius}
      border={border}
      activeBorder={activeBorder}
      backgroundColor={backgroundColor}
      activeColor={activeColor}
      color={color}
      activeText={activeText}
      textAlign={textAlign}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {text}
    </S.Button>
  );
}

export default Button;
