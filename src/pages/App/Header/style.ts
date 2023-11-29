import styled from 'styled-components';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  position: fixed;
  min-width: 100vw;

  display: grid;
  grid-template-columns: repeat(12, 1fr);

  background-color: ${(props) => props.theme.mainBackground};
  border-bottom: 1px solid ${(props) => props.theme.sectionBackground};

  z-index: 1;
`;

export const Logo = styled.h1`
  position: relative;

  ${flexCustom('row', 'center', 'center')}
  grid-column: 1/3;

  padding: 0 16px;

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

export const LinkList = styled.ul<{ mainCategoriesCount: number }>`
  grid-column: 3/-3;
  display: grid;
  grid-template-columns: repeat(${(props) => props.mainCategoriesCount}, 1fr);
  column-gap: 2rem;
`;
