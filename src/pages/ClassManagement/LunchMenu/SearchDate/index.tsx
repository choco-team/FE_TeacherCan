import { DatePicker } from 'calendar-in-react';
import { useState } from 'react';
import { BsCalendarCheck } from 'react-icons/bs';

import format from '@Utils/format';

import theme from '@Styles/theme';

import * as S from './style';
import { SearchDateProps } from './type';

const datePickerThemeColor = {
  pick: theme.color.primary[100],
  hover: theme.color.primary[50],
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
    <S.Layout>
      <span>{displayDate}</span>
      <BsCalendarCheck onClick={handleClickCalendarIcon} />
      {isOpenDatePicker && (
        <S.DatePickerLayout>
          <DatePicker
            startDate={pickDate}
            onChangeDate={handleChangeDate}
            isOnlyOneDay={true}
            themeColor={datePickerThemeColor}
          />
        </S.DatePickerLayout>
      )}
    </S.Layout>
  );
}

export default SearchDate;
