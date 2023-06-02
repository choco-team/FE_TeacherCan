import { ButtonHTMLAttributes } from 'react';
import { Variant } from 'src/types/style';

export type StyledButton = {
  variant?: Variant;
  boxSizing?: string;
  width?: string;
  minWidth?: string;
  height?: string;
  margin?: string;
  marginLeft?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  activeBorder?: string;
  handleClick?: () => void;
  backgroundColor?: string;
  activeColor?: string;
  activeText?: string;
  text?: string;
  color?: string;
  textAlign?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled'>;
