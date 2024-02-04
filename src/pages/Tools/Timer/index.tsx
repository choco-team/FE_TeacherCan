import { FaPause, FaPlay, FaStop } from 'react-icons/fa6';

import useTimer from '@Hooks/tools/timer/useTimer';
import useModal from '@Hooks/useModal';

import TimeSettingModal from './TimeSettingModal/TimeSettingModal';
import * as S from './style';

function Timer() {
  const { openModal } = useModal();
  const {
    isProceeding,
    time,
    progress,
    toggleState,
    resetTimer,
    changeInitTime,
  } = useTimer();

  console.log(time);

  const minute = Math.floor(time / 60);
  const second = time - minute * 60;

  const displayMinute = minute < 10 ? '0' + String(minute) : minute;
  const displaySecond = second < 10 ? '0' + String(second) : second;

  const displayTime = `${displayMinute}:${displaySecond}`;

  return (
    <S.Layout>
      <S.TimerMemo>쉬는시간</S.TimerMemo>
      <S.TimeContainer>
        <S.Time
          onClick={() =>
            openModal(
              <TimeSettingModal
                changeInitTime={changeInitTime}
                minute={minute}
                second={second}
              />,
            )
          }
        >
          {displayTime}
        </S.Time>
        <S.TimeBar>
          <S.ProgressBar progress={progress}></S.ProgressBar>
        </S.TimeBar>
        <S.TimerButtonWrapper>
          {isProceeding || progress === 100 ? (
            <S.TimerButton onClick={toggleState}>
              <FaPause />
            </S.TimerButton>
          ) : (
            <S.TimerButton onClick={toggleState}>
              <FaPlay />
            </S.TimerButton>
          )}
          <S.TimerButton onClick={resetTimer}>
            <FaStop />
          </S.TimerButton>
        </S.TimerButtonWrapper>
      </S.TimeContainer>
    </S.Layout>
  );
}

export default Timer;
