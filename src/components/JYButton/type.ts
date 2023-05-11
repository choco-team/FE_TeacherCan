export type StyledButton = {
  backgroundColor: string;
  activeColor: string;
};

export type Button = {
  type: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  backgroundColor: string;
  activeColor: string;
  handleClick: () => void;
};
