import styled from 'styled-components';

import theme from '@Styles/theme';

import * as T from './type';

export const BACKGROUND_COLOR = {
  text: `${theme.color.neutral[800]}`,
  outlined: `${theme.color.neutral[800]}`,
} as const;

export const Button = styled.button<T.StyledButton>`
  width: ${(props) => (props.fullWidth ? '100%' : props.width)};
  min-width: ${(props) => props.minWidth};
  border-radius: ${(props) => props.borderRadius};
  border: 1px solid
    ${(props) =>
      props.concept === 'contained'
        ? props.theme.background[props.variant]
        : props.concept === 'outlined'
        ? props.theme.color.text
        : 'transparent'};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) =>
    props.concept === 'contained'
      ? props.theme.background[props.variant]
      : props.theme.color.text};
  color: ${(props) =>
    props.concept === 'contained'
      ? props.theme.text
      : props.theme.background[props.variant]};
  text-align: center;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.hoverBackground[props.variant]};
    color: ${(props) => props.theme.text};
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
