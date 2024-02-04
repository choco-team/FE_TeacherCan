import { ChangeEventHandler, useState } from 'react';

import useModal from '@Hooks/useModal';

import Button from '@Components/Button';
import Input from '@Components/Input';

import * as S from './style';

type Props = {
  changeInitTime: (minute: number, second: number) => void;
};

function TimeSettingModal({ changeInitTime }: Props) {
  const { closeModal } = useModal();

  const [minute, setMinute] = useState(5);
  const [second, setSecond] = useState(0);

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

  const handleClickMinute = (minute: number) => {
    setMinute(minute);
    setSecond(0);
  };

  const handleClickConfirm = () => {
    changeInitTime(minute, second);
    closeModal();
  };

  return (
    <S.Layout>
      <S.ModalTitle>타이머 시간 설정하기</S.ModalTitle>
      <S.ModalDescription>
        타이머 시간을 설정할 수 있어요.
        <br />
        직접 설정할 수 있는 최대 시간은 60분에요.
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
          {[1, 3, 5, 10, 20, 30].map((minute) => (
            <Button
              size="sm"
              key={minute}
              concept="outlined"
              onClick={() => handleClickMinute(minute)}
            >
              {minute}분
            </Button>
          ))}
        </S.TimerButtonContainer>
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
