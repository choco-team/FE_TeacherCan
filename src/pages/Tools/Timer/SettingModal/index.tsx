import { DEFAULT_TIME } from '@Constant/tools/timer';
import { useState } from 'react';
import { css } from 'styled-components';

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

function SettingModal({ memo, changeInitTime, changeMemo }: Props) {
  const convertStringTime = (time: number) =>
    time < 10 ? `0${time}` : String(time);

  const { closeModal } = useModal();

  const recentTimes = localStorageHelper.get<number[]>('timer') ?? [];
  const recentTime = recentTimes[0] ?? DEFAULT_TIME;

  const [minute, setMinute] = useState(
    convertStringTime(Math.floor(recentTime / 60)),
  );
  const [second, setSecond] = useState(convertStringTime(recentTime % 60));

  const [newMemo, setNewMemo] = useState(memo);

  const handleRecentClickTime = (time: number) => {
    setMinute(convertStringTime(Math.floor(time / 60)));
    setSecond(convertStringTime(time % 60));
  };

  const handleClickConfirm = () => {
    if (minute === '00' && second === '00') {
      alert('유효한 시간을 설정해주세요.');

      return;
    }

    changeMemo(newMemo);
    changeInitTime(Number(minute), Number(second));
    closeModal();
  };

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
            onChangeOption={(selected) => setMinute(selected)}
          />
          <Select
            label="초"
            options={Array.from({ length: 60 }).map((_, index) =>
              convertStringTime(index),
            )}
            defaultOption={String(second)}
            onChangeOption={(selected) => setSecond(selected)}
          />
        </S.SelectContainer>
      </S.SettingContainer>
      {recentTimes.length > 0 && (
        <S.SettingContainer>
          <S.SettingType>최근 타이머 시간</S.SettingType>
          <S.RecentTimes>
            {recentTimes.map((time) => (
              <Button
                key={time}
                variant="primary"
                $style={css`
                  border-radius: 40px;
                `}
                onClick={() => handleRecentClickTime(time)}
              >
                {`${convertStringTime(
                  Math.floor(time / 60),
                )}분 ${convertStringTime(time % 60)}초`}
              </Button>
            ))}
          </S.RecentTimes>
        </S.SettingContainer>
      )}
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

export default SettingModal;
