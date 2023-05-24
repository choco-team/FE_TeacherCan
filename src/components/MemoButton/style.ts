import styled from 'styled-components';

import * as T from './type';

export const Button = styled.button<T.StyledButton>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  background-color: ${(props) => props.theme.background[props.variant]};
  color: ${(props) => props.theme.text};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};

  &:active {
    background-color: ${(props) => props.activeColor};
    color: ${(props) => props.activeText};
    border: ${(props) => props.activeBorder};
  }
`;
// 1px solid #9ca3af;
// border: 1px solid #fca5a5;
