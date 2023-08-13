import { useEffect, useState } from 'react';
import { AiOutlineUserAdd, AiFillSetting } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import Button from '@Components/Button';

import whitebackground from '@Assets/image/background/random-whitebg.png';
import woodbackground from '@Assets/image/background/random-woodbg.png';

import * as S from './style';

// server api 통신으로 불러올 학생 명렬표.
const MOCK_STUDENTS = [
  '김학생',
  '이학생',
  '박학생',
  '우학생',
  '최학생',
  '조학생',
  '장학생',
  '나학생',
  '다학생',
  '가학생',
];

function RandomPick() {
  const navigate = useNavigate();

  const [chosenStudents, setChosenStudents] = useState<string[]>([]);
  const [background, setbackground] = useState<'wood' | 'white'>('wood');

  const toggleWoodBackground = () => {
    setbackground('wood');
  };
  const toggleWhiteBackground = () => {
    setbackground('white');
  };

  const fromResultToSelect = () => {
    navigate('/tools/random-drawing');
  };

  const handleClickChoiceButton = () => {
    // 랜덤으로 섞는 로직
    const randomNumbers: number[] = [];

    while (randomNumbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * MOCK_STUDENTS.length);

      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }

    // 뽑힌 학생을 chosenStudents 상태에 집어 넣는 로직
    setChosenStudents(
      MOCK_STUDENTS.filter((_, index) => randomNumbers.includes(index)),
    );
  };

  useEffect(() => {
    // api가 완성이 되지 않았어요.
    // msw 기능을 사용하는데, msw -> 명세가 필요해요.
    // 나중에 학생 명렬표를 불러오는 api가 생기면 그것을 이용해서 명단을 가져오는 것.
    // fetch('/randompick/result')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const studentNames = Object.values(data.data) as string[];
    //     setChosenStudents(studentNames);
    //   })
    //   .catch((error) => console.error('Error:', error));
  }, []);

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
          <Button size="lg">
            <AiFillSetting />
            <div>설정</div>
          </Button>
        </S.ButtonWrapper>
      </S.RandomResult>
    </S.Layout>
  );
}

export default RandomPick;
