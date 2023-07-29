import styled from 'styled-components';

import useMe from '@Hooks/api/useMe';

import Board from './Board/Board';
import RegisterShoolButton from './RegisterShoolButton/RegisterShoolButton';

function LunchMenu() {
  const { data, isLoading } = useMe();

  if (isLoading) return <div>로딩</div>;

  const {
    data: { schoolName },
  } = data;

  const date = new Date();
  console.log(date.getFullYear());
  console.log(date.getMonth() + 1);
  console.log(date.getDate());

  const standardDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;

  return (
    <Layout>
      <div>
        {schoolName ? (
          <SchoolName>{schoolName} 급식</SchoolName>
        ) : (
          <RegisterShoolButton />
        )}
      </div>
      <StandardDate>{standardDate}</StandardDate>
      <Board />
    </Layout>
  );
}

export default LunchMenu;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  align-items: center;
  justify-items: start;
  row-gap: 40px;

  padding: 60px;

  min-height: 100%;

  color: ${(props) => props.theme.text};
`;

const SchoolName = styled.div`
  padding: 8px 12px;
  border-radius: 3px;

  font-size: 2rem;

  background-color: ${(props) => props.theme.background.primary};
  color: ${(props) => props.theme.primaryText};
`;

const StandardDate = styled.div`
  font-size: 2rem;
`;
