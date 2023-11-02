import { useState } from 'react';

import useModal from '@Hooks/useModal';

import Button from '@Components/Button';
import Input from '@Components/Input';

import * as S from './style';
import { MOCK_STUDENTS_LISTS } from '../mock';

export type RandomPickSetting = {
  studentsListId: number | undefined;
  studentsCount: number | undefined;
  isAllowDuplication: boolean | undefined;
};

type RandomPickModalProps = {
  randomPickSetting: RandomPickSetting;
};

function RandomPickModal({ randomPickSetting }: RandomPickModalProps) {
  const initialSetting = randomPickSetting ?? {
    studentsListId: undefined,
    studentsCount: undefined,
    isAllowDuplication: undefined,
  };

  const [settings, setSettings] = useState({
    studentsListId: initialSetting.studentsListId,
    studentsCount: initialSetting.studentsCount,
    isAllowDuplication: initialSetting.isAllowDuplication,
  });

  const { closeModal } = useModal();

  const handleChangeStudentsListId = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = event.currentTarget;
    setSettings((prevSettings) => ({
      ...prevSettings,
      studentsListId: Number(value),
    }));
  };

  const handleChangeStudentsCount = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.currentTarget;
    setSettings((prevSettings) => ({
      ...prevSettings,
      studentsCount: Number(value),
    }));
  };

  const handleClickDuplication = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const { value } = event.currentTarget;
    setSettings((prevSettings) => ({
      ...prevSettings,
      isAllowDuplication: value == 'YES',
    }));
  };

  const handleSaveBtn = () => {
    if (!settings.studentsListId) {
      alert('명렬표를 선택해주세요.');
      return;
    }

    if (!settings.studentsCount) {
      alert('뽑을 학생 수를 선택해주세요.');
      return;
    }

    localStorage.setItem('random-pick-setting', JSON.stringify(settings));
    closeModal();
  };

  const handleCancelBtn = () => {
    closeModal();
  };

  return (
    <>
      <S.ModalContainer>
        <S.ListSelect
          value={settings.studentsListId}
          onChange={handleChangeStudentsListId}
        >
          <option value={0}>명렬표 선택</option>
          {MOCK_STUDENTS_LISTS.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </S.ListSelect>
      </S.ModalContainer>
      <S.ModalContainer>
        <label>
          <Input
            size="sm"
            margin="5px"
            min={0}
            step={1}
            width="24px"
            value={settings.studentsCount}
            onChange={handleChangeStudentsCount}
          />
          명
        </label>
      </S.ModalContainer>
      <S.ModalContainer>
        <S.SmallButton
          value="YES"
          isOnClick={settings.isAllowDuplication}
          onClick={handleClickDuplication}
        >
          학생 중복뽑기
        </S.SmallButton>
        <S.SmallButton
          value="NO"
          isOnClick={!settings.isAllowDuplication}
          onClick={handleClickDuplication}
        >
          뽑힌 학생 제외하기
        </S.SmallButton>
      </S.ModalContainer>
      <S.SmallButtonWrapper>
        <Button onClick={handleCancelBtn}>취소</Button>
        <Button onClick={handleSaveBtn}>저장</Button>
      </S.SmallButtonWrapper>
      <p>명렬표와 중복 여부를 수정하면 처음부터 다시 학생을 뽑게 됩니다</p>
    </>
  );
}

export default RandomPickModal;
