import React, { SetStateAction } from 'react';

export type AuthInput = {
  name: 'nickname' | 'id' | 'password' | 'passwordConfirmation' | 'email';
  type?: 'text' | 'password';
  label: string;
  value: string;
  required?: boolean;
  isValid?: boolean;
  validationMessage?: string;
  isSignUp?: boolean;
  isCheckedEmail?: boolean;
  setIsCheckedEmail?: React.Dispatch<SetStateAction<boolean>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & Partial<Pick<HTMLInputElement, 'placeholder' | 'autocomplete'>>;

export type StyledInput = {
  type: string;
};
