export const VARIANT = [
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
] as const;

export type Variant = (typeof VARIANT)[number];

export type StyledButton = {
  variant: Variant;
  hasBorder: boolean;
};

export type Button = {
  text: string;
  variant: Variant;
  hasBorder?: boolean;
};
