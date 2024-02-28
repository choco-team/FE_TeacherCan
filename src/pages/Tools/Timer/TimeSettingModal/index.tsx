import { DEFAULT_TIME } from '@Constant/tools/timer';
import { useState } from 'react';

import useModal from '@Hooks/useModal';

import localStorageHelper from '@Utils/localStorageHelper';

import Button from '@Components/Button';
import Input from '@Components/Input';
import Select from '@Components/Select';

import * as S from './style';

type Props = {
  memo: string;
  changeInitTime: (minute: number, second: number) => void;
  changeMemo: (memo: string) => void;
};

function TimeSettingModal({ memo, changeInitTime, changeMemo }: Props) {
  const { closeModal } = useModal();

  const recentTimes = localStorageHelper.get<number[]>('timer') ?? [];
  const recentTime = recentTimes[0] ?? DEFAULT_TIME;

  const [minute, setMinute] = useState(Math.floor(recentTime / 60));
  const [second, setSecond] = useState(recentTime - minute * 60);

  const [newMemo, setNewMemo] = useState(memo);

  const handleClickTime = (selected: string) => {
    const [minute, second] = selected
      .replace(/[^0-9\s]/g, '')
      .split(' ')
      .map(Number);

    setMinute(minute);
    setSecond(second);
  };

  const setRecentTimer = () => {
    const recentTIme = minute * 60 + second;

    if (!recentTimes.includes(recentTIme))
      localStorage.setItem(
        'timer',
        JSON.stringify([
          minute * 60 + second,
          ...(recentTimes.length === 12
            ? recentTimes.slice(0, 11)
            : recentTimes),
        ]),
      );
  };

  const handleClickConfirm = () => {
    if (minute === 0 && second === 0) {
      alert('유효한 시간을 설정해주세요.');

      return;
    }

    setRecentTimer();
    changeMemo(newMemo);
    changeInitTime(minute, second);
    closeModal();
  };

  const convertStringTime = (time: number) =>
    time < 10 ? `0${time}` : String(time);

  return (
    <S.Layout>
      <S.ModalTitle>타이머 설정</S.ModalTitle>
      <S.SettingContainer>
        <S.SettingType>시간 직접 설정하기</S.SettingType>
        <S.SelectContainer>
          <Select
            label="분"
            options={Array.from({ length: 61 }).map((_, index) =>
              convertStringTime(index),
            )}
            defaultOption={String(minute)}
            onChangeOption={(selected) => setMinute(Number(selected))}
          />
          <Select
            label="초"
            options={Array.from({ length: 60 }).map((_, index) =>
              convertStringTime(index),
            )}
            defaultOption={String(second)}
            onChangeOption={(selected) => setSecond(Number(selected))}
          />
        </S.SelectContainer>
      </S.SettingContainer>
      <S.SettingContainer>
        <S.SettingType>메모 설정하기</S.SettingType>
        <Input
          placeholder="메모를 작성해주세요.(최대 30자)"
          maxLength={30}
          value={newMemo}
          onChange={(event) => setNewMemo(event.target.value)}
        />
      </S.SettingContainer>
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
