import SummaryList from '@Components/SummaryList';

import * as S from './style';
import HomeMemo from '../HomeMemo';

function SideSection() {
  return (
    <S.SideSection>
      <HomeMemo />
      <SummaryList
        title="오늘의 급식 메뉴"
        list={['옥수수밥', '미역국', '돈까스', '김치']}
        isLoading={false}
      />
    </S.SideSection>
  );
}

export default SideSection;
