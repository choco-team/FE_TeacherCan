import { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';

import Button from '@Components/Button';

import whitebackground from '@Assets/image/background/random-whitebg.png';
import woodbackground from '@Assets/image/background/random-woodbg.png';

import RandomPickModal from './RandomPickModal';
import * as S from './style';

// server api 통신으로 불러올 학생 명렬표.
const MOCK_STUDENTS = [
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
];

const SECOND_STUDENTS = [
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
];

function RandomPick() {
  const [chosenStudents, setChosenStudents] = useState<string[]>([]);
  const [background, setbackground] = useState<'wood' | 'white'>('wood');
  const [studentsList, setStudentsList] = useState('');
  const STUDENTS_LIST = ['MOCK_STUDENTS', 'SECOND_STUDENTS'];

  const toggleWoodBackground = () => {
    setbackground('wood');
  };
  const toggleWhiteBackground = () => {
    setbackground('white');
  };

  const handleListName = (event: React.MouseEvent<HTMLButtonElement>) => {
    const listName = event.currentTarget.innerText;
    setStudentsList(listName);
  };

  const handleClickChoiceButton = () => {
    // 랜덤으로 섞는 로직
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
              뽑힌 학생은{' '}
              <S.ResultSpan>{chosenStudents.join('    ')}</S.ResultSpan> 입니다.
            </p>
          ) : (
            <p>아직 선정이 완료되지 않았습니다.</p>
          )}
        </S.ResultWrapper>
        <S.ButtonWrapper>
          <Button size="lg" onClick={handleClickChoiceButton}>
            <AiOutlineUserAdd />
            <div>뽑기</div>
          </Button>
          <RandomPickModal>
            <S.ModalContainer>
              명렬표:
              {STUDENTS_LIST.map((listName, index) => (
                <S.SmallButton key={index} onClick={handleListName}>
                  {listName}
                </S.SmallButton>
              ))}
            </S.ModalContainer>
            <S.ModalContainer>인원</S.ModalContainer>
            <S.ModalContainer>중복 허용</S.ModalContainer>
            <S.SmallButtonWrapper>
              <Button>저장</Button>
              <Button>닫기</Button>
            </S.SmallButtonWrapper>
          </RandomPickModal>
        </S.ButtonWrapper>
      </S.RandomResult>
    </S.Layout>
  );
}

export default RandomPick;
