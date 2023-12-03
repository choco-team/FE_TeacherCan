import styled, { css } from 'styled-components';

import { INFORMATION_CONTENTS_THEME } from './constant';

export const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 10px;

  color: transparent;
`;

export const InformationContents = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border-radius: 8px;
  padding: 20px;

  ${({ theme }) => css`
    ${INFORMATION_CONTENTS_THEME[theme.name]};
  `}
`;

export const InformationContent = styled.li`
  line-height: 160%;

  margin-left: 2rem;
  list-style-type: disc;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  button {
    text-align: center;
    gap: 20px;
  }
`;
