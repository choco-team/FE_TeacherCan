import { ButtonHTMLAttributes } from 'react';
import { Variant } from 'src/types/style';

// hover도 active와 스타일 다르게
export type StyledButton = {
  className?: string;
  variant?: Variant;
  concept?: 'text' | 'contained' | 'outlined';
  width?: string;
  fullWidth?: boolean;
  minWidth?: string;
  margin?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  handleClick?: () => void;
  backgroundColor?: string;
  activeBackgroundColor?: string;
  hoverBackgroundColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled'>;
