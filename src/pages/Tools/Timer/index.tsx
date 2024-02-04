import { FaPause, FaPlay } from 'react-icons/fa6';

import useTimer from '@Hooks/tools/timer/useTimer';

import * as S from './style';

function Timer() {
  const { state, time, progress, toggleState } = useTimer();

  const minute = Math.floor(time / 60);
  const second = time - minute * 60;

  const displayMinute = minute < 10 ? '0' + String(minute) : minute;
  const displaySecond = second < 10 ? '0' + String(second) : second;

  const displayTime = `${displayMinute}:${displaySecond}`;

  const timerButton = state === 'pause' ? <FaPlay /> : <FaPause />;

  return (
    <S.Layout>
      <S.TimerMemo>쉬는시간</S.TimerMemo>
      <S.TimeContainer>
        <S.Time>{displayTime}</S.Time>
        <S.TimeBar>
          <S.ProgressBar progress={progress}></S.ProgressBar>
        </S.TimeBar>
        <S.TimerButton onClick={toggleState}>{timerButton}</S.TimerButton>
      </S.TimeContainer>
    </S.Layout>
  );
}

export default Timer;
