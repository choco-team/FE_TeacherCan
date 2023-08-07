import styled from 'styled-components';

import { getHexOpacity } from '@Styles/common';

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

  ${({ size }) =>
    (size === 'sm' &&
      `
      padding: 0.4rem 0.6rem;
      border-radius: 3px;
      font-size: 1.4rem;
    `) ||
    (size === 'lg' &&
      `
      min-width: 12rem;
      padding: 1rem 1.4rem;
      font-size: 1.8rem;
    `) ||
    (size === 'wide' &&
      `
      min-width: 12rem;
    `)}

  &:hover {
    background-color: ${(props) =>
      (props.concept === 'contained' &&
        props.theme.hoverBackground[props.variant]) ||
      (props.concept === 'outlined' &&
        `${props.theme.color.gray[500]}${getHexOpacity(0.05)}`)};
    border-color: ${(props) =>
      props.concept === 'outlined' &&
      props.theme.hoverBackground[props.variant]};
    color: ${(props) =>
      props.concept === 'outlined' &&
      props.theme.hoverBackground[props.variant]};
  }

  &:active {
    background-color: ${(props) =>
      (props.concept === 'contained' &&
        props.theme.activeBackground[props.variant]) ||
      (props.concept === 'outlined' &&
        `${props.theme.color.gray[500]}${getHexOpacity(0.1)}`)};
    border-color: ${(props) =>
      props.concept === 'outlined' &&
      props.theme.activeBackground[props.variant]};
    color: ${(props) =>
      props.concept === 'outlined' &&
      props.theme.activeBackground[props.variant]};
  }

  &:disabled {
    background-color: ${(props) => props.theme.color.gray[300]};
    border-color: ${(props) => props.theme.color.gray[300]};
    cursor: not-allowed;
  }
`;
