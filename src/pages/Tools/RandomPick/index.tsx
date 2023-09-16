import { useState } from 'react';
import { AiOutlineUserAdd, AiFillSetting } from 'react-icons/ai';

import useModal from '@Hooks/useModal';

import Button from '@Components/Button';

import whitebackground from '@Assets/image/background/random-whitebg.png';
import woodbackground from '@Assets/image/background/random-woodbg.png';

import { CustomModal } from './RandomPickConfirmModal';
import RandomPickModal from './RandomPickModal';
import * as S from './style';

// server api 통신으로 불러올 학생 명렬표.

function RandomPick() {
  //처음에 선택한 학생 리스트
  const [studentsList, setStudentsList] = useState<
    {
      number: number;
      name: string;
    }[]
  >([]);
  // 뒤섞인 학생 명단
  const [shuffledStudents, setShuffledStudents] = useState<string[]>([]);
  //뽑을 학생 숫자
  const [studentsNumber, setStudentsNumber] = useState(0);
  //중복 선정 상태
  const [duplication, setDuplication] = useState(false);
  // 뽑힌 학생 명단
  const [pickedStudents, setPickedStudents] = useState<string[]>([]);
  // 중복 금지일 때 제외되는 학생 명단
  const [excludedStudents, setExcludedStudents] = useState<string[]>([]);
  const { openModal } = useModal();
  const [background, setbackground] = useState<'wood' | 'white'>('wood');
  // 중복 금지인 상태에서 모두 뽑았을 때 popup되는 모달
  const [showModal, setShowModal] = useState(false);

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

    setShuffledStudents(storedStudentsList.map((student) => student.name));

    // 중복 허용과 비허용
    if (storedDuplication === 'true') {
      setPickedStudents(shuffledStudents.slice(0, storedStudentsNumber));
    } else {
      // if (excludedStudents.length === storedStudentsList.length) {
      //   const result = confirm(
      //     '모든 학생을 선정했습니다. 확인을 누르면 처음부터 다시 선정할 수 있습니다.',
      //   );

      //   if (result) {
      //     setExcludedStudents([]);
      //   }
      // }
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
  };

  const handleConfirm = () => {
    // Handle your confirm action here
    setExcludedStudents([]);
    setShowModal(false);
  };

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
          {excludedStudents.length === storedStudentsList.length && (
            <CustomModal
              message="모든 학생을 선정했습니다. 확인을 누르면 처음부터 다시 선정할 수 있습니다."
              isVisible={showModal}
              onClose={() => setShowModal(false)}
              onConfirm={handleConfirm}
            />
          )}

          {JSON.parse(localStorage.getItem('studentsList') || '[]').length !==
          0 ? (
            <p>
              <S.ResultSpan>{pickedStudents.join('    ')}</S.ResultSpan>
            </p>
          ) : (
            <p>학생 목록을 선택하세요</p>
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
                <RandomPickModal
                  studentsList={studentsList}
                  setStudentsList={setStudentsList}
                  setExcludedStudents={setExcludedStudents}
                  setStudentsNumber={setStudentsNumber}
                  studentsNumber={studentsNumber}
                  duplication={duplication}
                  setDuplication={setDuplication}
                />,
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
