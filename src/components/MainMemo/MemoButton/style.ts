import styled from 'styled-components';

import * as T from './type';

export const Button = styled.button<T.StyledButton>`
  align-items: center;
  width: 90px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #9ca3af;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  background-color: ${(props) => props.theme.background[props.variant]};
  color: ${(props) => props.theme.text};
  &:active {
    background-color: ${(props) => props.activeColor};
    color: ${(props) => props.activeText};
    border: 1px solid #fca5a5;
  }
`;
