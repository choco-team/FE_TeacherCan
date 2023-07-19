import { useEffect, useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { LuLogOut } from 'react-icons/lu';

import ConditionBox from '@Pages/RandomPick/ConditionBox';

import { UpDownWrapper, ResultDiv } from './style';
import * as S from './style';

function RandomPick() {
  const [chosenStudents, setChosenStudents] = useState<string[]>([]);

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
    <S.RandomResultLayout>
      <UpDownWrapper>
        <ConditionBox
          Icon={LuLogOut}
          String="조건설정"
          disableCursor={true}
          marginRight="10%"
        />
      </UpDownWrapper>
      <ResultDiv>
        {chosenStudents.length > 0 ? (
          <p>뽑힌 학생은 {chosenStudents.join(', ')} 입니다.</p>
        ) : (
          <p>아직 선정이 완료되지 않았습니다</p>
        )}
      </ResultDiv>
      <UpDownWrapper justifyContent="flex-end">
        <ConditionBox
          Icon={AiOutlineUserAdd}
          String="조건저장"
          disableCursor={false}
        />
      </UpDownWrapper>
    </S.RandomResultLayout>
  );
}

export default RandomPick;
