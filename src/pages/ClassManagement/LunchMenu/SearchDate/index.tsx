/* eslint-disable no-unused-vars */
import { DatePicker } from 'calendar-in-react';
import { useState } from 'react';
import { BsCalendarCheck } from 'react-icons/bs';
import styled from 'styled-components';

import format from '@Utils/format';

import theme from '@Styles/theme';

const datePickerThemeColor = {
  pick: theme.color.primary[100],
  hover: theme.color.primary[50],
};

type SearchDateProps = {
  pickDate: Date;
  changeStandardDate: (date: Date) => void;
};

function SearchDate({ pickDate, changeStandardDate }: SearchDateProps) {
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);

  const handleClickCalendarIcon = () => setIsOpenDatePicker(true);

  const handleChangeDate = (date: Date | null) => {
    if (!date) return;
    changeStandardDate(date);
    setIsOpenDatePicker(false);
  };

  const displayDate = format.date(pickDate, '-');

  return (
    <SearchDateLayout>
      <span>{displayDate}</span>
      <BsCalendarCheck onClick={handleClickCalendarIcon} />
      {isOpenDatePicker && (
        <DatePickerLayout>
          <DatePicker
            startDate={pickDate}
            onChangeDate={handleChangeDate}
            isOnlyOneDay={true}
            themeColor={datePickerThemeColor}
          />
        </DatePickerLayout>
      )}
    </SearchDateLayout>
  );
}

export default SearchDate;

const SearchDateLayout = styled.div`
  position: relative;

  display: flex;
  gap: 20px;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

const DatePickerLayout = styled.div`
  position: absolute;

  top: 30px;
  right: 0;
`;
