import styled from 'styled-components';

import * as T from './type';

export const Button = styled.button<T.StyledButton>`
  padding: 7px;

  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
  &:active {
    background-color: ${(props) => props.activeColor};
  }
  color: ${(props) => props.color};
`;

export const DayToVacation = styled.span`
  font-weight: bold;
`;
