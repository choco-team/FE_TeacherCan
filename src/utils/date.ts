const dateFunctions = {
  getToday: (dateObject: Date = new Date()) => {
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const displayMonth = month < 10 ? `0${month}` : `${month}`;
    const date = dateObject.getDate();
    const displayDate = date < 10 ? `0${date}` : `${date}`;

    return `${year}-${displayMonth}-${displayDate}`;
  },

  getMonthDateDay: (standardDate: Date) => {
    const month = standardDate.getMonth() + 1;
    const displayMonth = month < 10 ? `0${month}` : `${month}`;
    const date = standardDate.getDate();
    const displayDate = date < 10 ? `0${date}` : `${date}`;

    const dayOfNumber = standardDate.getDay();
    const dayOfWeek =
      dayOfNumber === 0
        ? '일'
        : dayOfNumber === 1
        ? '월'
        : dayOfNumber === 2
        ? '화'
        : dayOfNumber === 3
        ? '수'
        : dayOfNumber === 4
        ? '목'
        : dayOfNumber === 5
        ? '금'
        : '토';

    return `${displayMonth}월 ${displayDate}일 ${dayOfWeek}`;
  },

  isToday: (date: Date) => {
    const today = dateFunctions.getToday();
    const compareDate = dateFunctions.getToday(new Date(date));

    return today === compareDate;
  },
};

export default dateFunctions;
