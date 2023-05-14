import styled from 'styled-components';

import * as T from './type';

export const Button = styled.button<T.StyledButton>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;

  &:active {
    background-color: ${(props) => props.activeColor};
  }
  color: ${(props) => props.color};
  padding: 7px;
`;

export const DayToVacation = styled.span`
  font-weight: bold;
`;
