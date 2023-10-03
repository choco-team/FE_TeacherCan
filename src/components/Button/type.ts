import { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import { Variant } from 'src/types/style';

type Button = {
  className?: string;
  variant?: Variant;
  concept?: 'text' | 'contained' | 'outlined';
  size?: 'sm' | 'md' | 'lg' | 'narrow' | 'wide';
  width?: string;
  fullWidth?: boolean;
  minWidth?: string;
  margin?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type StyledButton = {
  variant: Variant;
  concept: 'text' | 'contained' | 'outlined';
  size: 'sm' | 'md' | 'lg' | 'narrow' | 'wide';
  width: string;
  fullWidth: boolean;
  minWidth: string;
  borderRadius: string;
  padding: string;
  margin: string;
  fontSize: string;
  fontWeight: string;
};

export type { Button, StyledButton };
