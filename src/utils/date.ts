const dateFunctions = {
  getToday: () => {
    const dateObject = new Date();

    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const displayMonth = month < 10 ? `0${month}` : `${month}`;
    const date = dateObject.getDate();
    const displayDate = date < 10 ? `0${date}` : `${date}`;

    return `${year}-${displayMonth}-${displayDate}`;
  },
};

export default dateFunctions;
