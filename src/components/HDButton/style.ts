import styled from 'styled-components';

import * as T from './type';

export const Button = styled.button<T.StyledButton>`
  background-color: ${(props) => props.theme[props.color]};
  color: ${(props) => props.theme.text};
  padding: 10px 20px;
  border-radius: 10px;
`;
