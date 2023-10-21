import { useState } from 'react';

import useModal from '@Hooks/useModal';

import Button from '@Components/Button';

import * as S from './style';
import { MOCK_STUDENTS_LISTS } from '../mock';

function RandomPickModal() {
  const settingString = localStorage.getItem('random-pick-setting');

  const initialSetting = settingString
    ? JSON.parse(settingString)
    : {
        studentsListId: undefined,
        studentsCount: undefined,
        isAllowDuplication: undefined,
      };
  //뽑을 학생 리스트
  const [studentsListId, setStudentsListId] = useState(
    initialSetting.studentsListId,
  );
  //뽑을 학생 숫자
  const [studentsCount, setStudentsCount] = useState(
    initialSetting.studentsCount,
  );
  //중복 선정 상태
  const [isAllowDuplication, setIsAllowDuplication] = useState(
    initialSetting.isAllowDuplication,
  );
  const { closeModal } = useModal();

  const handleChangeStudentsListId = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = event.currentTarget;
    setStudentsListId(Number(value));
  };

  const handleChangeStudentsCount = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.currentTarget;
    setStudentsCount(Number(value));
  };

  const handleClickDuplication = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const { value } = event.currentTarget;
    setIsAllowDuplication(value === 'YES');
  };

  const handleSaveConditions = () => {
    if (!studentsListId) {
      alert('명렬표를 선택해주세요.');
      return;
    }

    if (!studentsCount) {
      alert('뽑을 학생 수를 선택해주세요.');
      return;
    }

    const setting = {
      studentsListId,
      studentsCount,
      isAllowDuplication,
    };
    localStorage.setItem('random-pick-setting', JSON.stringify(setting));
    closeModal();
  };

  return (
    <>
      <S.ModalContainer>
        <S.ListSpan>명렬표</S.ListSpan>
        <S.ListSelect onChange={handleChangeStudentsListId}>
          <option value={0}>선택</option>
          {MOCK_STUDENTS_LISTS.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </S.ListSelect>
      </S.ModalContainer>
      <S.ModalContainer>
        <label htmlFor="theInputNumber">인원</label>
        <S.PersonInput
          id="theInputNumber"
          min={0}
          step={1}
          onChange={handleChangeStudentsCount}
        ></S.PersonInput>
      </S.ModalContainer>
      <S.ModalContainer>
        중복 허용
        <S.SmallButton
          value="YES"
          isOnClick={isAllowDuplication}
          onClick={handleClickDuplication}
        >
          YES
        </S.SmallButton>
        <S.SmallButton
          value="NO"
          isOnClick={!isAllowDuplication}
          onClick={handleClickDuplication}
        >
          NO
        </S.SmallButton>
      </S.ModalContainer>
      <S.SmallButtonWrapper>
        <Button onClick={handleSaveConditions}>저장</Button>
      </S.SmallButtonWrapper>
    </>
  );
}

export default RandomPickModal;
