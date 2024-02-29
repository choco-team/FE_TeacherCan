import { useState } from 'react';
import { FaPause, FaPlay, FaStop } from 'react-icons/fa6';
import { IoSettings } from 'react-icons/io5';

import useTimer from '@Hooks/tools/timer/useTimer';
import useLength from '@Hooks/useLength';
import useModal from '@Hooks/useModal';

import format from '@Utils/format';
import localStorageHelper from '@Utils/localStorageHelper';

import SettingModal from './SettingModal';
import * as S from './style';

function Timer() {
  const recentMemo = localStorageHelper.get<string>('memo') ?? '';

  const [memo, setMemo] = useState<string>(recentMemo);

  const changeMemo = (memo: string) => {
    setMemo(memo);
    localStorage.setItem('memo', JSON.stringify(memo));
  };

  const [ref, width] = useLength<HTMLDivElement>({
    standard: 'width',
  });

  const { openModal } = useModal();
  const {
    isProceeding,
    time,
    progress,
    toggleState,
    resetTimer,
    changeInitTime,
  } = useTimer();

  const displayTime = format.time(time);
  const timerFontSize = `${width / 4}px`;

  const setTimer = () => {
    resetTimer();
    openModal(
      <SettingModal
        changeInitTime={changeInitTime}
        changeMemo={changeMemo}
        memo={recentMemo}
      />,
    );
  };

  return (
    <S.Layout ref={ref}>
      {memo ? <S.TimerMemo>{memo}</S.TimerMemo> : <div></div>}
      <S.Time $fontSize={timerFontSize}>{displayTime}</S.Time>
      <S.TimeBar>
        <S.ProgressBar progress={progress}></S.ProgressBar>
      </S.TimeBar>
      <S.TimerButtons>
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
      </S.TimerButtons>
      <S.TimerSideButtons>
        <S.SideButton onClick={setTimer}>
          <IoSettings />
        </S.SideButton>
      </S.TimerSideButtons>
    </S.Layout>
  );
}

export default Timer;
