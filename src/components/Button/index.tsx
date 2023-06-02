import * as S from './style';
import * as T from './type';

function Button({
  variant,
  type,
  disabled,
  handleClick,
  boxSizing,
  width,
  minWidth,
  height,
  borderRadius,
  border,
  marginLeft,
  padding,
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
      boxSizing={boxSizing}
      width={width}
      minWidth={minWidth}
      height={height}
      borderRadius={borderRadius}
      border={border}
      marginLeft={marginLeft}
      padding={padding}
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
