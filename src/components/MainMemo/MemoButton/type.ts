import { ButtonHTMLAttributes } from 'react';
import { Variant } from 'src/types/style';

export type StyledButton = {
  variant: Variant;
  activeColor: string;
  activeText: string;
};

export type MemoButton = {
  variant: Variant;
  text: string;
  handleClick: () => void;
  activeColor: string;
  activeText: string;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;
