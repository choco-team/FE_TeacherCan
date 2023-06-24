import styled from 'styled-components';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  grid-column: -1 / -3;
  justify-self: flex-end;

  ${flexCustom('row', 'center', 'normal')}

  padding: 2rem;

  svg {
    ${flexCustom('row', 'center', 'normal')}
    font-size: 2.5rem;
  }
`;

export const AlarmContainer = styled.div`
  position: relative;

  margin-right: 10px;

  color: ${(props) => props.theme.subText};

  cursor: pointer;
`;

export const AlarmDot = styled.div`
  position: absolute;
  bottom: 0;
  right: -2px;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  background-color: ${(props) => props.theme.accentText};
`;

export const UserNameWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  column-gap: 5px;
`;

export const UserName = styled.div``;
