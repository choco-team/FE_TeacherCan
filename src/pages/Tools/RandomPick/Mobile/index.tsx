import { useState } from 'react';
import { IoEllipse, IoEllipseOutline } from 'react-icons/io5';

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
  studentsList: string[];
  pickedStudents: string[];
  handleConfirm: () => void;
  handlePick: () => void;
  style?: React.CSSProperties;
};

function Mobile({
  randomPickSetting,
  studentsList,
  pickedStudents,
  handleConfirm,
  handlePick,
}: RandomPickModalProps) {
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
  };

  return (
    <>
      <S.MobileContainer>
        <S.MobileSpan>명렬표 선택</S.MobileSpan>
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
      </S.MobileContainer>
      <S.MobileContainer>
        <S.MobileSpan>학생 수 선택</S.MobileSpan>
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
      </S.MobileContainer>
      <S.MobileContainer>
        <S.MobileSpan>중복 여부</S.MobileSpan>

        <S.SmallButton
          value="YES"
          isOnClick={settings.isAllowDuplication}
          onClick={handleClickDuplication}
        >
          <div>
            {settings.isAllowDuplication ? (
              <IoEllipse color={theme.color.primary[300]} />
            ) : (
              <IoEllipseOutline />
            )}
          </div>
          학생 중복뽑기
        </S.SmallButton>
        <S.SmallButton
          value="NO"
          isOnClick={!settings.isAllowDuplication}
          onClick={handleClickDuplication}
        >
          <div>
            {settings.isAllowDuplication ? (
              <IoEllipseOutline />
            ) : (
              <IoEllipse color={theme.color.primary[300]} />
            )}
          </div>
          뽑힌 학생 제외하기
        </S.SmallButton>
        <Button onClick={handleSaveBtn}>저장</Button>
      </S.MobileContainer>
      {pickedStudents.length !== 0 && (
        <p>
          <S.MobileSpan>{pickedStudents.join('    ')}</S.MobileSpan>
        </p>
      )}
      {studentsList.length === 0 &&
        localStorage.getItem('random-pick-setting') && (
          <>
            <p>
              모든 학생을 선정했습니다. 확인을 누르면 처음부터 다시 선정할 수
              있습니다.
            </p>

            <Button onClick={handleConfirm}>확인</Button>
          </>
        )}

      <Button onClick={handlePick}>뽑기</Button>
    </>
  );
}

export default Mobile;
