export type AuthInput = {
  name: 'userName' | 'id' | 'password' | 'passwordConfirmation';
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type StyledInput = {
  type: string;
};
