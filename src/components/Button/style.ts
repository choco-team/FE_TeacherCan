import styled from 'styled-components';

import type { StyledButton } from './type';

export const Button = styled.button<StyledButton>`
  width: ${(props) => (props.fullWidth ? '100%' : props.width)};
  min-width: ${(props) => props.minWidth};
  border-radius: ${(props) => props.borderRadius};
  border: 1px solid
    ${(props) =>
      props.concept === 'contained'
        ? props.theme.background[props.variant]
        : props.concept === 'outlined'
        ? props.theme.background[props.variant]
        : 'transparent'};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) =>
    props.concept === 'contained'
      ? props.theme.background[props.variant]
      : 'transparent'};
  color: ${(props) =>
    props.concept === 'contained'
      ? props.theme.primaryText
      : props.theme.background[props.variant]};
  text-align: center;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
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
