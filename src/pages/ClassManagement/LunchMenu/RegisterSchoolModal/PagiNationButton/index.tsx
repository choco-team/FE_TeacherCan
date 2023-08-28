import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

import * as S from './style';
import { PagiNationButtonProps } from './type';

function PagiNationButton({
  hasPage,
  schoolList,
  searchSchool,
}: PagiNationButtonProps) {
  const handleClickPagiNationButton = (type: 'next' | 'prev') => {
    if (!hasPage) return;

    if (!schoolList || schoolList === 'notFound') return;

    const {
      pagination: { pageNumber: currentPage, totalPageNumber },
    } = schoolList;

    const searchPageNumber = currentPage + (type === 'next' ? +1 : -1);

    if (searchPageNumber < 1) {
      alert('첫 페이지이에요.');
      return;
    }

    if (searchPageNumber > totalPageNumber) {
      alert('마지막 페이지이에요.');
      return;
    }

    searchSchool(searchPageNumber);
  };

  return (
    <S.Layout hasPage={hasPage}>
      <BiSolidLeftArrow onClick={() => handleClickPagiNationButton('prev')} />
      <BiSolidRightArrow onClick={() => handleClickPagiNationButton('next')} />
    </S.Layout>
  );
}

export default PagiNationButton;
