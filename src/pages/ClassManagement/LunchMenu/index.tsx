import useMe from '@Hooks/api/useMe';

import Board from './Board';
import RegisterShoolButton from './RegisterShoolButton/RegisterShoolButton';
import * as S from './style';

function LunchMenu() {
  const { data, isLoading } = useMe();

  if (isLoading) return <div>로딩</div>;

  const {
    data: { schoolName },
  } = data;

  const date = new Date();

  const standardDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;

  return (
    <S.Layout>
      <div>
        {schoolName ? (
          <S.SchoolName>{schoolName} 급식</S.SchoolName>
        ) : (
          <RegisterShoolButton />
        )}
      </div>
      <S.StandardDate>{standardDate}</S.StandardDate>
      <Board />
    </S.Layout>
  );
}

export default LunchMenu;
