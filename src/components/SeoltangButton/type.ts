export type SeoltangButton = {
  type: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  handleClick: () => void;
  backgroundColor: string;
};

export type StyledSeoltangButton = {
  backgroundColor: string;
};
