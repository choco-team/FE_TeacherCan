import { BORDER_STYLE } from './style';

export type TextArea = {
  placeholder: string;
  border?: keyof typeof BORDER_STYLE;
  rows?: number;
};

export type StyledTextArea = {
  border: keyof typeof BORDER_STYLE;
};
