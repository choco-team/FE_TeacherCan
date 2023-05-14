import styled from 'styled-components';

import * as T from './type';

export const Button = styled.button<T.StyledButton>`
  background-color: ${(props) => props.theme.background[props.variant]};
  color: ${(props) => props.theme.text};
  padding: 10px 20px;
  border-radius: 20px;
  border: ${(props) =>
    props.hasBorder && `1px solid ${props.theme.border[props.variant]}`};
  cursor: ${(props) => (props.disabled ? 'init' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '0.6' : 1)};
`;
