import styled from 'styled-components';

export const Layout = styled.div`
  position: fixed;
  min-width: 100vw;

  display: grid;
  grid-template-columns: repeat(12, 1fr);

  padding: 2rem 2rem 0rem;

  background-color: ${(props) => props.theme.background.white};

  z-index: 1;
`;

export const Logo = styled.h1`
  position: relative;
  bottom: 0.5rem;

  grid-column: 1/3;

  padding-left: 2rem;

  a {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: flex-end;
  }
`;

export const LogoImage = styled.img`
  min-width: 4rem;
  max-width: 4rem;
`;

export const LogoText = styled.span`
  color: ${(props) => props.theme.accentText};
  font-size: 2.6rem;
  font-weight: 700;
  letter-spacing: 0.3rem;
`;

export const LinkList = styled.ul`
  grid-column: 3/-3;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
