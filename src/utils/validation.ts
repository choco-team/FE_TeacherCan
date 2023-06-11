const validation = {
  checkIsAllTextFilled(texts: string[]) {
    return texts.every((text) => !!text.trim());
  },
};

export default validation;
