import { Variant } from 'src/types/style';

export type StyledButton = {
  variant: Variant;
  hasBorder: boolean;
};

export type Button = {
  text: string;
  variant: Variant;
  hasBorder?: boolean;
};
