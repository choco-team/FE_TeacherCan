import { useEffect, useState } from 'react';
import { AiOutlineUserAdd, AiFillSetting } from 'react-icons/ai';
import { css } from 'styled-components';

import { useMedia } from '@Hooks/useMedia';
import useModal from '@Hooks/useModal';

import Button from '@Components/Button';

import whitebackground from '@Assets/image/background/random-whitebg.png';
import woodbackground from '@Assets/image/background/random-woodbg.png';

import RandomPickModal, { RandomPickSetting } from './RandomPickModal';
import { MOCK_STUDENTS_LISTS } from './mock';
import * as S from './style';

function RandomPick() {
  const media = useMedia();
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

  const lightGreen = 'rgb(23, 142, 23)';
  const darkGreen = 'rgb(20, 84, 13)';
  const darkYellow = 'rgb(236, 230, 204)';

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
      {media === 'mobile' ? (
        <>
          {/* <Mobile
            randomPickSetting={randomPickSetting}
            studentsList={studentsList}
            pickedStudents={pickedStudents}
            handleConfirm={handleConfirm}
            handlePick={handlePick}
          /> */}
        </>
      ) : (
        <>
          <S.RandomResult
            media={media}
            backgroundImage={
              background == 'wood' ? woodbackground : whitebackground
            }
          >
            <S.SelectBackgroundButtonWrapper justifyContent="space-between">
              <S.WoodBackgroundButton
                media={media}
                onClick={toggleWoodBackground}
                backgroundColor={lightGreen}
                hoverBackground={darkGreen}
                textColor="white"
              >
                G
              </S.WoodBackgroundButton>
              <S.WoodBackgroundButton
                media={media}
                onClick={toggleWhiteBackground}
                backgroundColor="white"
                hoverBackground={darkYellow}
                textColor="black"
              >
                W
              </S.WoodBackgroundButton>
            </S.SelectBackgroundButtonWrapper>
            <S.ResultWrapper color={background == 'wood' ? 'white' : 'black'}>
              {pickedStudents.length !== 0 && (
                <p>
                  <S.ResultSpan media={media}>
                    {pickedStudents.join('    ')}
                  </S.ResultSpan>
                </p>
              )}

              {!localStorage.getItem('random-pick-setting') && (
                <S.CheckParagraph media={media}>
                  학생 목록을 선택하세요
                </S.CheckParagraph>
              )}

              {studentsList.length === 0 &&
                localStorage.getItem('random-pick-setting') && (
                  <>
                    <S.CheckParagraph media={media}>
                      모든 학생을 선정했습니다. 확인을 누르면 처음부터 다시
                      선정할 수 있습니다.
                    </S.CheckParagraph>

                    <Button
                      onClick={handleConfirm}
                      $style={css`
                        margin: 20px;
                      `}
                      size={media === 'tablet' ? 'sm' : 'lg'}
                    >
                      확인
                    </Button>
                  </>
                )}
            </S.ResultWrapper>
            <S.ButtonWrapper>
              <Button
                onClick={handlePick}
                size={media === 'tablet' ? 'sm' : 'lg'}
              >
                <AiOutlineUserAdd />
                뽑기
              </Button>
              <Button
                size={media === 'tablet' ? 'sm' : 'lg'}
                onClick={() => {
                  {
                    openModal(
                      <RandomPickModal
                        randomPickSetting={randomPickSetting}
                        media={media}
                      />,
                    );
                  }
                }}
              >
                <AiFillSetting />
                설정
              </Button>
            </S.ButtonWrapper>
          </S.RandomResult>
        </>
      )}
    </S.Layout>
  );
}

export default RandomPick;
