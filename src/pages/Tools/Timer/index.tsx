import { useState } from 'react';
import { FaPause, FaPlay, FaStop } from 'react-icons/fa6';

import useTimer from '@Hooks/tools/timer/useTimer';
import useModal from '@Hooks/useModal';

import format from '@Utils/format';

import TimeSettingModal from './TimeSettingModal';
import TimerMemoModal from './TimerMemoModal';
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

  const [memo, setMemo] = useState<string>();

  const displayTime = format.time(time);

  const handleClickTime = () =>
    openModal(<TimeSettingModal changeInitTime={changeInitTime} />);

  const handleClickMessage = () => openModal(<TimerMemoModal />);

  return (
    <S.Layout>
      {memo && <S.TimerMemo onClick={handleClickMessage}>{memo}</S.TimerMemo>}
      <S.TimeContainer>
        <S.Time onClick={handleClickTime}>{displayTime}</S.Time>
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
