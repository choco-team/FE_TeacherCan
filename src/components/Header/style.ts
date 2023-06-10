import styled from 'styled-components';

export const Layout = styled.div`
  position: fixed;
  min-width: 100vw;

  display: grid;
  grid-template-columns: repeat(12, 1fr);

  padding: 2rem 2rem 0rem;

  background-color: ${(props) => props.theme.background.basic};

  z-index: 1;
`;

export const LinkList = styled.ul`
  grid-column: 3/-3;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
