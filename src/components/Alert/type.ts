export type Alert = {
  type?: 'success' | 'error';
  text: string;
  duration?: number;
  isReverse?: boolean;
};

export type StyledAlert = {
  type: 'success' | 'error';
  isReverse: boolean;
};

export type StyledDurationBar = {
  type: 'success' | 'error';
  isReverse: boolean;
  duration: number;
};
