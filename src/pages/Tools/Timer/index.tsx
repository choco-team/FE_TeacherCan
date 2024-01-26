import { FaPlay } from 'react-icons/fa6';

import * as S from './style';

function Timer() {
  return (
    <S.Layout>
      <S.TimerMemo>쉬는시간</S.TimerMemo>
      <S.TimeContainer>
        <S.Time>03:20</S.Time>
        <S.TimeBar></S.TimeBar>
        <S.TimerButton>
          <FaPlay />
        </S.TimerButton>
      </S.TimeContainer>
    </S.Layout>
  );
}

export default Timer;
