import styled from 'styled-components';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  align-items: center;
  justify-items: start;
  row-gap: 20px;

  min-height: 100%;

  color: ${(props) => props.theme.text};
`;

export const TitleContainer = styled.div`
  ${flexCustom('row', 'center', 'center')}
  gap: 20px;
`;

export const SchoolName = styled.div`
  padding: 8px 0px;
  border-radius: 3px;

  font-size: 2rem;
  font-weight: 700;

  color: ${(props) => props.theme.accentText};
`;

export const StandardDate = styled.input`
  font-size: 2rem;

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
`;

export const BoardLayout = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  align-self: flex-start;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;

  border-radius: 12px;
`;

export const IconWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    width: 500px;
    height: 500px;
  }
`;

export const NoSchool = styled.span`
  display: block;

  margin-top: 20px;
  color: ${(props) => props.theme.grayText};
`;
