import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import { LuLogOut } from 'react-icons/lu';
import { TiFlowMerge } from 'react-icons/ti';

import CheckBox from './CheckBox';
import ConditionBox from './ConditionBox';
import Container from './Container';
import Div from './Div';
import Layout from './Layout';
import Result from './Result';
import * as S from './style';

function RandomPick() {
  return (
    <Div>
      <Div>
        <ConditionBox Icon={LuLogOut} String="조건설정" disableCursor={false} />
      </Div>
      <S.RandomPickLayout>
        <Container>
          <Layout>
            <ConditionBox
              Icon={HiUserGroup}
              String="대상"
              disableCursor={true}
            />
          </Layout>
          <CheckBox name={'기존 명단'} />
          <CheckBox name={'새로운 명단'} />
        </Container>
        <Container>
          <Layout>
            <ConditionBox
              Icon={TiFlowMerge}
              String="방식"
              disableCursor={true}
            />
          </Layout>
          <CheckBox name={'한 명 뽑기'}></CheckBox>
          <CheckBox name={'줄 세우기'}></CheckBox>
        </Container>
        <Container>
          <Layout>
            <ConditionBox
              Icon={BsEye}
              String="대상 설정"
              disableCursor={true}
            />
          </Layout>
          <CheckBox name={'인원 설정'}></CheckBox>
          <CheckBox name={'전체 랜덤'}></CheckBox>
        </Container>
      </S.RandomPickLayout>
    </Div>
  );
}

export default RandomPick;
