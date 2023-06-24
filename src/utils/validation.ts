export const checkIsAllTextFilled = (texts: string[]) => {
  return texts.every((text) => !!text.trim());
};
