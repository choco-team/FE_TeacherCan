import { ButtonHTMLAttributes } from 'react';
import { Variant } from 'src/types/style';

type Button = {
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
  color?: string;
  fontSize?: string;
  fontWeight?: string;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled'>;

type StyledButton = {
  variant: Variant;
  concept: 'text' | 'contained' | 'outlined';
  width: string;
  fullWidth: boolean;
  minWidth: string;
  borderRadius: string;
  padding: string;
  fontSize: string;
  fontWeight: string;
};

export type { Button, StyledButton };
