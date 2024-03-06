import { useState } from 'react';
import { IoEllipse, IoEllipseOutline } from 'react-icons/io5';

import { useToast } from '@Hooks/toast';
import useModal from '@Hooks/useModal';

import Button from '@Components/Button';
import Input from '@Components/Input';

import theme from '@Styles/theme';

import * as S from './style';
import { MOCK_STUDENTS_LISTS } from '../mock';

export type RandomPickSetting = {
  studentsListId: number | undefined;
  studentsCount: number | undefined;
  isAllowDuplication: boolean | undefined;
};

type RandomPickModalProps = {
  randomPickSetting: RandomPickSetting;
  media: string;
  style?: React.CSSProperties;
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
  const showToast = useToast();

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
      showToast('학생 명단을 선택하세요', 'warning');
      return;
    }

    if (!settings.studentsCount) {
      showToast('뽑을 학생 수를 설정하세요', 'warning');
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
        <S.BigBsShield />
        <S.WarningSpan>
          명렬표 또는 중복 여부를 바꾸면 뽑기가 초기화됩니다
        </S.WarningSpan>
      </S.ModalContainer>
      <S.ModalContainer>
        <S.ListSpan>명렬표 선택</S.ListSpan>
        <S.ListSelect
          value={settings.studentsListId}
          onChange={handleChangeStudentsListId}
        >
          <option value={0}>클릭하여 명렬표 선택</option>
          {MOCK_STUDENTS_LISTS.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </S.ListSelect>
      </S.ModalContainer>
      <S.ModalContainer>
        <S.ListSpan>학생 수 선택</S.ListSpan>
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
        <S.ListSpan>중복 여부</S.ListSpan>

        <S.SmallButton
          value="YES"
          isOnClick={settings.isAllowDuplication}
          onClick={handleClickDuplication}
        >
          <S.IconWrapper>
            {settings.isAllowDuplication ? (
              <IoEllipse color={theme.color.primary[300]} />
            ) : (
              <IoEllipseOutline />
            )}
          </S.IconWrapper>
          학생 중복뽑기
        </S.SmallButton>
        <S.SmallButton
          value="NO"
          isOnClick={!settings.isAllowDuplication}
          onClick={handleClickDuplication}
        >
          <S.IconWrapper>
            {settings.isAllowDuplication ? (
              <IoEllipseOutline />
            ) : (
              <IoEllipse color={theme.color.primary[300]} />
            )}
          </S.IconWrapper>
          뽑힌 학생 제외하기
        </S.SmallButton>
      </S.ModalContainer>
      <S.SmallButtonWrapper>
        <Button concept="text" variant="gray" onClick={handleCancelBtn}>
          취소
        </Button>
        <Button onClick={handleSaveBtn}>저장</Button>
      </S.SmallButtonWrapper>
    </>
  );
}

export default RandomPickModal;
