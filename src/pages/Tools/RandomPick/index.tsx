import { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';

import Button from '@Components/Button';

import whitebackground from '@Assets/image/background/random-whitebg.png';
import woodbackground from '@Assets/image/background/random-woodbg.png';

import RandomPickModal from './RandomPickModal';
import * as S from './style';

// server api 통신으로 불러올 학생 명렬표.
const STUDENTS_LISTS: { [key: string]: { number: number; name: string }[] } = {
  MOCK_STUDENTS: [
    { number: 1, name: '김학생' },
    { number: 2, name: '이학생' },
    { number: 3, name: '박학생' },
    { number: 4, name: '우학생' },
    { number: 5, name: '최학생' },
    { number: 6, name: '조학생' },
    { number: 7, name: '장학생' },
    { number: 8, name: '나학생' },
    { number: 9, name: '다학생' },
    { number: 10, name: '가학생' },
  ],

  SECOND_STUDENTS: [
    { number: 1, name: '김나라' },
    { number: 2, name: '이나라' },
    { number: 3, name: '박나라' },
    { number: 4, name: '우나라' },
    { number: 5, name: '최나라' },
    { number: 6, name: '조나라' },
    { number: 7, name: '장나라' },
    { number: 8, name: '나나라' },
    { number: 9, name: '다나라' },
    { number: 10, name: '가나라' },
  ],
};

function RandomPick() {
  const [chosenStudents, setChosenStudents] = useState<string[]>([]);
  const [background, setbackground] = useState<'wood' | 'white'>('wood');
  const [studentsNumber, setStudentsNumber] = useState(0);

  const toggleWoodBackground = () => {
    setbackground('wood');
  };

  const toggleWhiteBackground = () => {
    setbackground('white');
  };

  const handleListName = (listName: string) => {
    localStorage.setItem(
      'studentsList',
      JSON.stringify(STUDENTS_LISTS[listName]),
    );
  };

  const handlePersonNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    localStorage.setItem('newValue', newValue.toString());
  };

  const handleDuplicationYes = () => {
    localStorage.setItem('duplication', true.toString());
  };

  const handleDuplicationNo = () => {
    localStorage.setItem('duplication', false.toString());
  };

  const handlePick = () => {
    const storedStudentsList = JSON.parse(
      localStorage.getItem('studentsList') || '[]',
    ) as {
      number: number;
      name: string;
    }[];
    const storedDuplication = localStorage.getItem('duplication') ?? 'false';
    setStudentsNumber(parseInt(localStorage.getItem('newValue') || '0'));

    // 중복 허용
    if (storedDuplication === 'true') {
      for (let i = storedStudentsList.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [storedStudentsList[i], storedStudentsList[randomIndex]] = [
          storedStudentsList[randomIndex],
          storedStudentsList[i],
        ];
      }
    }

    setChosenStudents(storedStudentsList.map((student) => student.name));
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
          {chosenStudents.length > 0 ? (
            <p>
              <S.ResultSpan>{chosenStudents.join('    ')}</S.ResultSpan>
            </p>
          ) : (
            <p>아직 선정이 완료되지 않았습니다.</p>
          )}
        </S.ResultWrapper>
        <S.ButtonWrapper>
          <Button size="lg">
            <AiOutlineUserAdd />
            <div onClick={handlePick}>뽑기</div>
          </Button>
          <RandomPickModal>
            <S.ModalContainer>
              명렬표
              {Object.keys(STUDENTS_LISTS).map((listName, index) => (
                <S.SmallButton
                  key={index}
                  onClick={() => handleListName(listName)}
                >
                  {listName}
                </S.SmallButton>
              ))}
            </S.ModalContainer>
            <S.ModalContainer>
              <label htmlFor="theInputNumber">인원</label>
              <S.PersonInput
                id="theInputNumber"
                min={0}
                step={1}
                onChange={handlePersonNumber}
              ></S.PersonInput>
            </S.ModalContainer>
            <S.ModalContainer>
              중복 허용
              <S.SmallButton onClick={handleDuplicationYes}>YES</S.SmallButton>
              <S.SmallButton onClick={handleDuplicationNo}>NO</S.SmallButton>
            </S.ModalContainer>
            <S.SmallButtonWrapper>
              <Button>닫기</Button>
            </S.SmallButtonWrapper>
          </RandomPickModal>
        </S.ButtonWrapper>
      </S.RandomResult>
    </S.Layout>
  );
}

export default RandomPick;
