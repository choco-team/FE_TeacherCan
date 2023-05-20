import { Variant } from 'src/types/style';

export type StyledButton = {
  variant: Variant;
  activeColor: string;
  activeText: string;
};

export type MemoButton = {
  variant: Variant;
  type: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  handleClick: () => void;
  activeColor: string;
  activeText: string;
};
