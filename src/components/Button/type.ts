import { ButtonHTMLAttributes } from 'react';
import { Variant } from 'src/types/style';

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
  color?: string;
  fontSize?: string;
  fontWeight?: string;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled'>;
