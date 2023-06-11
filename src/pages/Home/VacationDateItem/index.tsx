import { VscCalendar } from 'react-icons/vsc';

import * as S from './style';
import * as T from './type';

function VacationDateItem({
  isSummer = true,
  borderRadius = '20px',
  backgroundColor = '#FF8A00',
  fontWeight = '600',
  fontSize = '1.6rem',
}: T.VacationDateItem) {
  const text = isSummer ? '여름' : '겨울';
  return (
    <S.VacationDateItem
      isSummer={isSummer}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      fontWeight={fontWeight}
      fontSize={fontSize}
    >
      <VscCalendar /> {text}
      {'방학 D-'}
    </S.VacationDateItem>
  );
}

export default VacationDateItem;
