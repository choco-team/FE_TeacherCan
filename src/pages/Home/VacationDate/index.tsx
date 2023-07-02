import { VscCalendar } from 'react-icons/vsc';

import * as S from './style';

interface VacationDateProps {
  season: '여름' | '겨울' | '봄';
  date: number;
}

function VacationDate({ season, date }: VacationDateProps) {
  const displayVacationDate = `${season}방학 D - ${date}`;
  return (
    <S.Layout>
      <VscCalendar />
      <S.VacationDate>{displayVacationDate}</S.VacationDate>
    </S.Layout>
  );
}

export default VacationDate;
