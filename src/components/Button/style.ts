import styled from 'styled-components';

import * as T from './type';

export const Button = styled.button<T.StyledButton>`
  box-sizing: ${(props) => props.boxSizing};
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft};
  padding: ${(props) => props.padding};
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
