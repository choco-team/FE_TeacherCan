import { ChangeEventHandler, useState } from 'react';

import useModal from '@Hooks/useModal';

import Button from '@Components/Button';
import Input from '@Components/Input';

import * as S from './style';

type Props = {
  minute: number;
  second: number;
  changeInitTime: (minute: number, second: number) => void;
};

function TimeSettingModal({
  minute: prevMinute,
  second: prevSecond,
  changeInitTime,
}: Props) {
  const { closeModal } = useModal();

  const [minute, setMinute] = useState(prevMinute);
  const [second, setSecond] = useState(prevSecond);

  const jsonRecentTimer = localStorage.getItem('timer');
  const recentTimer: number[] = jsonRecentTimer
    ? JSON.parse(jsonRecentTimer)
    : [];

  const handleChangeTime: (
    type: 'minute' | 'second',
  ) => ChangeEventHandler<HTMLInputElement> = (type) => (event) => {
    const value = Number(event.target.value);

    if (isNaN(value)) return;

    if (value > 60 && type === 'minute') {
      setMinute(60);
      return;
    }

    if (value > 59 && type === 'second') {
      setSecond(59);
      return;
    }

    if (type === 'minute') setMinute(value);
    else setSecond(value);
  };

  const handleClickTimeButton = (minute: number, second: number = 0) => {
    setMinute(minute);
    setSecond(second);
  };

  const setRecentTimer = () => {
    localStorage.setItem(
      'timer',
      JSON.stringify([
        ...(recentTimer.length === 6 ? recentTimer.slice(1) : recentTimer),
        minute * 60 + second,
      ]),
    );
  };

  const handleClickConfirm = () => {
    setRecentTimer();
    changeInitTime(minute, second);
    closeModal();
  };

  return (
    <S.Layout>
      <S.ModalTitle>타이머 시간 설정하기</S.ModalTitle>
      <S.ModalDescription>
        타이머 시간을 설정할 수 있어요.
        <br />
        직접 설정할 수 있는 최대 시간은 60분이에요.
      </S.ModalDescription>
      <S.InputLabel>
        <S.InputLabelText>직접 설정하기</S.InputLabelText>
        <S.InputContainer>
          <S.InputWrapper>
            <Input
              size="sm"
              value={minute}
              onChange={handleChangeTime('minute')}
            />
            <span>분</span>
          </S.InputWrapper>
          <S.InputWrapper>
            <Input
              size="sm"
              value={second}
              onChange={handleChangeTime('second')}
            />
            <span>초</span>
          </S.InputWrapper>
        </S.InputContainer>
      </S.InputLabel>
      <S.InputLabel>
        <S.InputLabelText>간편 설정하기</S.InputLabelText>
        <S.TimerButtonContainer>
          {[3, 5, 10, 20, 30].map((minute) => (
            <Button
              size="sm"
              key={minute}
              concept="outlined"
              onClick={() => handleClickTimeButton(minute)}
            >
              {minute}분
            </Button>
          ))}
        </S.TimerButtonContainer>
      </S.InputLabel>
      <S.InputLabel>
        <S.InputLabelText>최근 타이머 시간</S.InputLabelText>
        <S.RecentTimer>
          {recentTimer.length !== 0 ? (
            recentTimer.map((time, index) => (
              <span
                key={index}
                className="recent-timer"
                onClick={() =>
                  handleClickTimeButton(Math.floor(time / 60), time % 60)
                }
              >
                {Math.floor(time / 60)}분 {time % 60}초
              </span>
            ))
          ) : (
            <span className="empty-message">
              최근에 사용한 타이머가 없어요.
            </span>
          )}
        </S.RecentTimer>
      </S.InputLabel>
      <S.BottomButtonContainer>
        <Button variant="gray" concept="text" onClick={closeModal}>
          취소
        </Button>
        <Button onClick={handleClickConfirm}>확인</Button>
      </S.BottomButtonContainer>
    </S.Layout>
  );
}

export default TimeSettingModal;
