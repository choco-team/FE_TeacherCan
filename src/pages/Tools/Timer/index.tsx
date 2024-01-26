import { useEffect, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa6';

import * as S from './style';

function Timer() {
  const [initTime, setInitTime] = useState(320);
  const [time, setTime] = useState(320);
  const [state, setState] = useState<'stop' | 'play'>('stop');

  const minute = Math.floor(time / 60);
  const second = time - minute * 60;
  const displayMinute = minute < 10 ? '0' + String(minute) : minute;
  const displaySecond = second < 10 ? '0' + String(second) : second;
  const displayTime = `${displayMinute}:${displaySecond}`;
  const timerButton = state === 'stop' ? <FaPlay /> : <FaPause />;
  const progress = ((initTime - time) / initTime) * 100;

  const handleClickTimerButton = () => {
    if (state === 'play') setState('stop');
    else setState('play');
  };

  useEffect(() => {
    if (time === 0 || state === 'stop') return;

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, state]);

  return (
    <S.Layout>
      <S.TimerMemo>쉬는시간</S.TimerMemo>
      <S.TimeContainer>
        <S.Time>{displayTime}</S.Time>
        <S.TimeBar>
          <S.ProgressBar progress={progress}></S.ProgressBar>
        </S.TimeBar>
        <S.TimerButton onClick={handleClickTimerButton}>
          {timerButton}
        </S.TimerButton>
      </S.TimeContainer>
    </S.Layout>
  );
}

export default Timer;
