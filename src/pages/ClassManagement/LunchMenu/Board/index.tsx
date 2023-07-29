import styled from 'styled-components';

import useLunchMenu from '@Hooks/api/useLunchMenu';

import theme from '@Styles/theme';

const STUDENT_MOCK_DATA = [
  {
    name: '김학생',
    allergy: [1, 5, 13],
  },
  {
    name: '이학생',
    allergy: [17],
  },
];

function Board() {
  const { lunchMenu } = useLunchMenu();

  return (
    <Layout>
      <Menus>
        {lunchMenu?.map(({ menu, allergy }) => {
          return (
            <Menu key={menu}>
              <Name>{menu}</Name>
              <Allergies>{allergy.join(' ')}</Allergies>
            </Menu>
          );
        })}
      </Menus>
      <AllergyReminder>
        <AllergyReminderTitle>알러지 알리미</AllergyReminderTitle>
        <AllergyStudents>
          {STUDENT_MOCK_DATA.map(({ name, allergy }) => {
            return (
              <StudentWrapper key={name}>
                <div>{name}</div>
                <Allergies>{allergy.join(' ')}</Allergies>
              </StudentWrapper>
            );
          })}
        </AllergyStudents>
      </AllergyReminder>
    </Layout>
  );
}

export default Board;

const Layout = styled.div`
  grid-column: 1 / -1;
  align-self: stretch;
  justify-self: stretch;

  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 60px;

  padding: 40px;
  border-radius: 12px;

  background-color: ${theme.color.primary[100]};
  color: ${theme.color.black};
`;

const Menus = styled.div`
  display: grid;

  padding: 40px;
  border-radius: 12px;

  background-color: ${theme.color.gray[50]};
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.div`
  font-size: 2.4rem;
`;

const Allergies = styled.div`
  color: ${theme.color.gray[400]};
`;

const AllergyReminder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const AllergyReminderTitle = styled.div`
  background-color: ${theme.color.white};

  padding: 20px;
  border-radius: 16px;

  text-align: center;
  font-size: 2rem;
`;

const AllergyStudents = styled.div`
  display: grid;
  row-gap: 20px;
`;

const StudentWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;

  font-size: 2rem;
`;
