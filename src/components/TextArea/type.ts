import { CSSProperties, type TextareaHTMLAttributes } from 'react';

export type TextArea = TextareaHTMLAttributes<HTMLTextAreaElement> &
  Omit<StyledTextArea, '$size'> & {
    size?: StyledTextArea['$size'];
  };

export type StyledTextArea = {
  $size: 'sm' | 'md';
  dense?: boolean;

  // CSS properties
  width?: CSSProperties['width'];
  maxWidth?: CSSProperties['maxWidth'];
  minWidth?: CSSProperties['minWidth'];
  padding?: CSSProperties['padding'];
  margin?: CSSProperties['margin'];
  border?: CSSProperties['border'];
  borderWidth?: CSSProperties['borderWidth'];
  borderStyle?: CSSProperties['borderStyle'];
  borderRadius?: CSSProperties['borderRadius'];
  backgroundColor?: CSSProperties['backgroundColor'];
  color?: CSSProperties['color'];
  fontSize?: CSSProperties['fontSize'];
} & CSSProperties;
