export type StyledButton = {
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  hasBorder: boolean;
};

export type Button = {
  text: string;
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  hasBorder?: boolean;
};
