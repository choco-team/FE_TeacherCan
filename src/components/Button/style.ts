import styled from 'styled-components';

import * as T from './type';
export const Button = styled.button<T.StyledButton>`
  width: ${(props) => (props.fullWidth ? '100%' : props.width)};
  min-width: ${(props) => props.minWidth};
  border-radius: ${(props) => props.borderRadius};
  border: 1px solid ${(props) => props.theme.background[props.variant]};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.theme.background[props.variant]};
  color: ${(props) => props.theme.text};
  text-align: center;
  font-size: ${(props) => props.fontSize};
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.hoverBackground[props.variant]};
  }

  &:active {
    background-color: ${(props) => props.theme.activeBackground[props.variant]};
  }

  &:disabled {
    background-color: ${(props) => props.theme.color.gray[300]};
    border-color: ${(props) => props.theme.color.gray[300]};
    cursor: not-allowed;
  }
`;
