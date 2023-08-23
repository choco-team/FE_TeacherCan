import SideSection from './SideSection';
import * as S from './style';

function Home() {
  const today = new Date();
  return (
    <S.Layout>
      <SideSection today={today} />
    </S.Layout>
  );
}

export default Home;
