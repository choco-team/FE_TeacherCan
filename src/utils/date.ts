const dateFunctions = {
  getToday: () => {
    const dateObject = new Date();

    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const displayMonth = month < 10 ? `0${month}` : `${month}`;
    const date = dateObject.getDate();

    return `${year}-${displayMonth}-${date}`;
  },
};

export default dateFunctions;
