import type { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';

export type StyledInput = {
  type?: HTMLInputTypeAttribute;
  $size: 'sm' | 'md';
  dense?: boolean;

  // CSS properties
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  padding?: string;
  margin?: string;
  border?: string;
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
};

export type Input = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
  Omit<StyledInput, '$size'> & {
    size?: StyledInput['$size'];
  };
