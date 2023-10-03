import { useEffect, useState } from 'react';
import { AiOutlineUserAdd, AiFillSetting } from 'react-icons/ai';

import useModal from '@Hooks/useModal';

import Button from '@Components/Button';

import whitebackground from '@Assets/image/background/random-whitebg.png';
import woodbackground from '@Assets/image/background/random-woodbg.png';

import RandomPickModal from './RandomPickModal';
import { MOCK_STUDENTS_LISTS } from './mock';
import * as S from './style';

type RandomPickSetting = {
  studentsListId: number | undefined;
  studentsCount: number | undefined;
  isAllowDuplication: boolean | undefined;
};

function RandomPick() {
  const [randomPickSetting, setRandomPickSetting] = useState<RandomPickSetting>(
    {
      studentsListId: undefined,
      studentsCount: undefined,
      isAllowDuplication: undefined,
    },
  );
  //학생 명단
  const [studentsList, setStudentsList] = useState<string[]>([]);
  // 뒤섞인 학생 명단
  const [shuffledStudents, setShuffledStudents] = useState<string[]>([]);
  // 뽑힌 학생 명단
  const [pickedStudents, setPickedStudents] = useState<string[]>([]);
  // 중복 금지일 때 제외되는 학생 명단
  const [excludedStudents, setExcludedStudents] = useState<string[]>([]);
  const { isOpen, openModal } = useModal();
  const [background, setbackground] = useState<'wood' | 'white'>('white');

  const toggleWoodBackground = () => {
    setbackground('wood');
  };

  const toggleWhiteBackground = () => {
    setbackground('white');
  };

  const storedStudentsNumber = parseInt(
    localStorage.getItem('newValue') || '0',
  );
  const storedStudentsList = JSON.parse(
    localStorage.getItem('studentsList') || '[]',
  ) as {
    number: number;
    name: string;
  }[];

  const storedDuplication = localStorage.getItem('duplication') ?? 'false';

  const handlePick = () => {
    for (let i = storedStudentsList.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [storedStudentsList[i], storedStudentsList[randomIndex]] = [
        storedStudentsList[randomIndex],
        storedStudentsList[i],
      ];
    }
    console.log(storedStudentsList);

    setShuffledStudents(storedStudentsList.map((student) => student.name));

    // 중복 허용과 비허용
    if (storedDuplication === 'true') {
      setPickedStudents(shuffledStudents.slice(0, storedStudentsNumber));
    } else {
      const remainingStudents = shuffledStudents.filter(
        (item) => !excludedStudents.includes(item),
      );
      const newlyPickedStudents = remainingStudents.slice(
        0,
        storedStudentsNumber,
      );
      setPickedStudents(newlyPickedStudents);
      setExcludedStudents((prev) => [...prev, ...newlyPickedStudents]);
    }

    if (excludedStudents.length === storedStudentsList.length) {
      const end = '종료';
      setExcludedStudents((prev) => [...prev, ...end]);
    }
    console.log(excludedStudents);
  };

  const handleConfirm = () => {
    setExcludedStudents([]);
  };

  useEffect(() => {
    if (isOpen) return;
    const setting = localStorage.getItem('random-pick-setting');
    if (setting) setRandomPickSetting(JSON.parse(setting));
  }, [isOpen]);

  useEffect(() => {
    const fetchedStudentsList = MOCK_STUDENTS_LISTS.find(
      ({ id }) => id === randomPickSetting.studentsListId,
    )?.students;
    if (fetchedStudentsList)
      setStudentsList(fetchedStudentsList.map(({ name }) => name));
  }, [randomPickSetting.studentsListId]);

  console.log(randomPickSetting.studentsListId, studentsList);

  return (
    <S.Layout>
      <S.RandomResult
        backgroundImage={
          background == 'wood' ? woodbackground : whitebackground
        }
      >
        <S.SelectBackgroundButtonWrapper justifyContent="space-between">
          <S.BackgroundButtonContainer>
            <S.WoodBackgroundButton
              handleClick={toggleWoodBackground}
              backgroundColor="#007200"
              hoverBackground="#14540d"
            />
            <S.WoodBackgroundButton
              handleClick={toggleWhiteBackground}
              backgroundColor="white"
              hoverBackground="#ece6cc"
            />
          </S.BackgroundButtonContainer>
        </S.SelectBackgroundButtonWrapper>
        <S.ResultWrapper color={background == 'wood' ? 'white' : 'black'}>
          {JSON.parse(localStorage.getItem('studentsList') || '[]').length !==
          0 ? (
            <p>
              <S.ResultSpan>{pickedStudents.join('    ')}</S.ResultSpan>
            </p>
          ) : (
            <p>학생 목록을 선택하세요</p>
          )}

          {excludedStudents.length > storedStudentsList.length && (
            <>
              <p>
                모든 학생을 선정했습니다. 확인을 누르면 처음부터 다시 선정할 수
                있습니다.
              </p>

              <Button onClick={handleConfirm} margin="20px">
                확인
              </Button>
            </>
          )}
        </S.ResultWrapper>
        <S.ButtonWrapper>
          <Button size="lg">
            <AiOutlineUserAdd />
            <div onClick={handlePick}>뽑기</div>
          </Button>
          <Button
            size="lg"
            onClick={() => {
              openModal(
                <RandomPickModal setExcludedStudents={setExcludedStudents} />,
              );
            }}
          >
            <AiFillSetting />
            <div>설정</div>
          </Button>
        </S.ButtonWrapper>
      </S.RandomResult>
    </S.Layout>
  );
}

export default RandomPick;
