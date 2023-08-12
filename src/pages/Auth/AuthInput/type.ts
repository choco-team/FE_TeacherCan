import React from 'react';

export type AuthInput = {
  name: 'userName' | 'id' | 'password' | 'passwordConfirmation' | 'email';
  type?: 'text' | 'password';
  label: string;
  value: string;
  required?: boolean;
  isValid?: boolean;
  validationMessage?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & Partial<Pick<HTMLInputElement, 'placeholder' | 'autocomplete'>>;

export type StyledInput = {
  type: string;
};
