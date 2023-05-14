export type StyledButton = {
  backgroundColor: string;
  activeColor: string;
};

export type Button = {
  type: 'button' | 'submit' | 'reset' | undefined;
  vacationtext: string;
  datetext: string;
  backgroundColor: string;
  activeColor: string;
  handleClick: () => void;
  color: string;
};
