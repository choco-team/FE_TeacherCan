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
  word-break: keep-all;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;

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
    background-color: ${({ theme, concept, variant }) =>
      (concept === 'contained' && theme.hoverBackground[variant]) ||
      ((concept === 'outlined' || concept === 'text') &&
        `${theme.color.gray[500]}${getHexOpacity(0.05)}`)};
    border-color: ${({ theme, concept, variant }) =>
      concept === 'outlined' && theme.hoverBackground[variant]};
    color: ${({ theme, concept, variant }) =>
      (concept === 'outlined' || concept === 'text') &&
      theme.hoverBackground[variant]};
  }

  &:active {
    background-color: ${({ theme, concept, variant }) =>
      (concept === 'contained' && theme.activeBackground[variant]) ||
      ((concept === 'outlined' || concept === 'text') &&
        `${theme.color.gray[500]}${getHexOpacity(0.1)}`)};
    border-color: ${({ theme, concept, variant }) =>
      concept === 'outlined' && theme.activeBackground[variant]};
    color: ${({ theme, concept, variant }) =>
      (concept === 'outlined' || concept === 'text') &&
      theme.activeBackground[variant]};
  }

  &:disabled {
    background-color: ${(props) => props.theme.color.gray[300]};
    border-color: ${(props) => props.theme.color.gray[300]};
    cursor: not-allowed;
  }
`;
