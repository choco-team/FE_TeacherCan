export type StyledButton = {
  backgroundColor: string;
  activeColor: string;
};

export type Button = {
  type: 'button' | 'submit' | 'reset' | undefined;
  text1: string;
  text2: string;
  backgroundColor: string;
  activeColor: string;
  handleClick: () => void;
  color: string;
};
