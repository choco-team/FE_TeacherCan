import { useEffect, useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { LuLogOut } from 'react-icons/lu';
import { PiSunBold, PiMoonStarsBold } from 'react-icons/pi';

import ConditionBox from '@Pages/RandomPick/ConditionBox';

import whitebackground from '@Assets/image/background/random-whitebg.png';
import woodbackground from '@Assets/image/background/random-woodbg.png';

import { UpDownWrapper, ResultDiv } from './style';
import * as S from './style';

function RandomPick() {
  const [chosenStudents, setChosenStudents] = useState<string[]>([]);
  const [isWoodBackground, setIsWoodBackground] = useState(true);
  const toggleBackground = () => {
    setIsWoodBackground((prev) => !prev);
  };

  useEffect(() => {
    fetch('/randompick/result')
      .then((response) => response.json())
      .then((data) => {
        const studentNames = Object.values(data.data) as string[];
        setChosenStudents(studentNames);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <S.RandomResultLayout
      backgroundImage={isWoodBackground ? woodbackground : whitebackground}
    >
      <UpDownWrapper justifyContent="space-between">
        <ConditionBox
          Icon={LuLogOut}
          String="랜덤뽑기"
          disableCursor={true}
          marginLeft="-8px"
        />
        <S.RandomPickBackgroundButton handleClick={toggleBackground}>
          {isWoodBackground ? <PiSunBold /> : <PiMoonStarsBold />}
        </S.RandomPickBackgroundButton>
      </UpDownWrapper>
      <ResultDiv color={isWoodBackground ? 'white' : 'black'}>
        {chosenStudents.length > 0 ? (
          <p>뽑힌 학생은 {chosenStudents.join(', ')} 입니다.</p>
        ) : (
          <p>아직 선정이 완료되지 않았습니다</p>
        )}
      </ResultDiv>
      <UpDownWrapper justifyContent="flex-end">
        <ConditionBox
          Icon={AiOutlineUserAdd}
          String="뽑기"
          disableCursor={false}
          marginLeft="10px"
        />
        <ConditionBox
          Icon={AiOutlineUserAdd}
          String="한 번 더"
          disableCursor={false}
          marginLeft="10px"
        />
        <ConditionBox
          Icon={AiOutlineUserAdd}
          String="조건설정"
          disableCursor={false}
          marginLeft="10px"
        />
      </UpDownWrapper>
    </S.RandomResultLayout>
  );
}

export default RandomPick;
