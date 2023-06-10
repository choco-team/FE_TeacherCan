import SummaryList from '@Components/SummaryList';

import HomeMemo from './HomeMemo';

function Home() {
  return (
    <>
      <HomeMemo />
      <SummaryList
        title="오늘의 급식 메뉴"
        list={['옥수수밥', '미역국', '돈까스', '김치']}
        isLoading={false}
      />
    </>
  );
}

export default Home;
