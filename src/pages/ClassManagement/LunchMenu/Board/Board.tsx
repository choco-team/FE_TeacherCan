import styled from 'styled-components';

import useLunchMenu from '@Hooks/api/useLunchMenu';

import theme from '@Styles/theme';

function Board() {
  const { lunchMenu } = useLunchMenu();

  return (
    <Layout>
      <Menus>
        {lunchMenu?.map(({ menu, allergy }) => {
          return (
            <Menu key={menu}>
              <Name>{menu}</Name>
              <Allergies>
                {allergy.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </Allergies>
            </Menu>
          );
        })}
      </Menus>
      <div>dd</div>
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
  column-gap: 40px;

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
  display: flex;
  gap: 5px;

  color: ${theme.color.gray[400]};
`;
