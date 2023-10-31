import { useEffect, useState } from 'react';
import { AiOutlineUserAdd, AiFillSetting } from 'react-icons/ai';

import useModal from '@Hooks/useModal';

import Button from '@Components/Button';

import whitebackground from '@Assets/image/background/random-whitebg.png';
import woodbackground from '@Assets/image/background/random-woodbg.png';

import RandomPickModal, { RandomPickSetting } from './RandomPickModal';
import { MOCK_STUDENTS_LISTS } from './mock';
import * as S from './style';

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
  //뽑을 학생 수
  const [count, setCount] = useState(0);
  //중복 여부
  const [duplication, setDuplication] = useState<undefined | boolean>(
    undefined,
  );
  // 뽑힌 학생 명단
  const [pickedStudents, setPickedStudents] = useState<string[]>([]);
  // 중복 금지일 때 제외할 학생 명단

  const { isOpen, openModal } = useModal();
  const [background, setbackground] = useState<'wood' | 'white'>('white');

  const toggleWoodBackground = () => {
    setbackground('wood');
  };

  const toggleWhiteBackground = () => {
    setbackground('white');
  };

  const handlePick = () => {
    //학생 명단 셔플하기
    for (let i = studentsList.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [studentsList[i], studentsList[randomIndex]] = [
        studentsList[randomIndex],
        studentsList[i],
      ];
    }

    //학생 뽑기
    if (studentsList.length >= count) {
      setPickedStudents(studentsList.slice(0, count));
    } else setPickedStudents(studentsList);
  };

  const handleConfirm = () => {
    const fetchedStudentsList = MOCK_STUDENTS_LISTS.find(
      ({ id }) => id === randomPickSetting.studentsListId,
    )?.students;
    if (fetchedStudentsList)
      setStudentsList(fetchedStudentsList.map(({ name }) => name));
    setPickedStudents([]);
  };

  //StudentsList 업데이트하기
  useEffect(() => {
    if (duplication !== true) {
      setStudentsList(
        studentsList.filter((student) => !pickedStudents.includes(student)),
      );
    }
  }, [duplication, pickedStudents]);

  //modal에서 선택했던 학생 명단, 수, 중복여부 가져오기
  useEffect(() => {
    if (isOpen) return;
    const setting = localStorage.getItem('random-pick-setting');
    if (setting) setRandomPickSetting(JSON.parse(setting));
  }, [isOpen]);

  useEffect(() => {
    const fetchedStudentsList = MOCK_STUDENTS_LISTS.find(
      ({ id }) => id === randomPickSetting.studentsListId,
    )?.students;
    const fetchedIsAllowDuplication = randomPickSetting.isAllowDuplication;
    if (fetchedStudentsList)
      setStudentsList(fetchedStudentsList.map(({ name }) => name));

    setDuplication(fetchedIsAllowDuplication);
    setPickedStudents([]);
  }, [randomPickSetting.studentsListId, randomPickSetting.isAllowDuplication]);

  useEffect(() => {
    const fetchedStudentsCount = randomPickSetting.studentsCount;
    if (fetchedStudentsCount) {
      setCount(fetchedStudentsCount);
    }
  }, [randomPickSetting.studentsCount]);

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
          {pickedStudents.length !== 0 && (
            <p>
              <S.ResultSpan>{pickedStudents.join('    ')}</S.ResultSpan>
            </p>
          )}

          {!localStorage.getItem('random-pick-setting') && (
            <p>학생 목록을 선택하세요</p>
          )}

          {studentsList.length === 0 &&
            localStorage.getItem('random-pick-setting') && (
              <>
                <p>
                  모든 학생을 선정했습니다. 확인을 누르면 처음부터 다시 선정할
                  수 있습니다.
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
                <RandomPickModal randomPickSetting={randomPickSetting} />,
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
