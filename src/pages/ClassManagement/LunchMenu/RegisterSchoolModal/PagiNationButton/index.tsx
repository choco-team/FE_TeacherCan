import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

import * as S from './style';
import { PagiNationButtonProps } from './type';

function PagiNationButton({
  hasPage,
  pagination,
  pagiNationSearchSchool,
}: PagiNationButtonProps) {
  const handleClickPagiNationButton = (type: 'next' | 'prev') => {
    if (!hasPage || !pagination) return;

    const searchPageNumber =
      pagination.pageNumber + (type === 'next' ? +1 : -1);

    if (searchPageNumber < 1) {
      alert('첫 페이지이에요.');
      return;
    }

    if (searchPageNumber > pagination.totalPageNumber) {
      alert('마지막 페이지이에요.');
      return;
    }
    pagiNationSearchSchool(searchPageNumber);
  };

  return (
    <S.Layout hasPage={hasPage}>
      <BiSolidLeftArrow onClick={() => handleClickPagiNationButton('prev')} />
      <BiSolidRightArrow onClick={() => handleClickPagiNationButton('next')} />
    </S.Layout>
  );
}

export default PagiNationButton;
