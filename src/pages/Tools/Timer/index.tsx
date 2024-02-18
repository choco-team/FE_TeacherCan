import { useRef, useState } from 'react';
import { FaPause, FaPlay, FaStop } from 'react-icons/fa6';

import useTimer from '@Hooks/tools/timer/useTimer';
import useLength from '@Hooks/useLength';
import useModal from '@Hooks/useModal';

import format from '@Utils/format';

import TimeSettingModal from './TimeSettingModal';
import TimerMemoModal from './TimerMemoModal';
import * as S from './style';

function Timer() {
  const [ref, width] = useLength<HTMLDivElement>({
    standard: 'width',
  });

  console.log(width);

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
  const timerFontSize = `${width / 3.3}px`;

  const handleClickTime = () =>
    openModal(<TimeSettingModal changeInitTime={changeInitTime} />);

  const handleClickMessage = () => openModal(<TimerMemoModal />);

  return (
    <S.Layout ref={ref}>
      <S.TimerMemo onClick={handleClickMessage}>{memo}</S.TimerMemo>
      <S.Time onClick={handleClickTime} $fontSize={timerFontSize}>
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
    </S.Layout>
  );
}

export default Timer;
