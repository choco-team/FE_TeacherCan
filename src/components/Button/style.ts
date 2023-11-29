import styled, { RuleSet, css } from 'styled-components';

import { getHexOpacity } from '@Styles/common';
import theme from '@Styles/theme';

import type { ButtonSize, StyledButton } from './type';

const SIZE: Record<ButtonSize, RuleSet> = {
  sm: css`
    padding: 0.6rem 1.2rem;
    border-radius: 3px;
    font-size: 1.4rem;
  `,

  md: css`
    padding: 0.8rem 2rem;
    border-radius: 5px;
    font-size: 1.6rem;
  `,

  lg: css`
    min-width: 12rem;
    padding: 1rem 1.4rem;
    border-radius: 8px;
    font-size: 1.8rem;
  `,

  wide: css`
    min-width: 12rem;
  `,
};

const LIGHT_THEME = {
  background: {
    primary: theme.color.primary[500],
    secondary: theme.color.secondary[400],
    gray: theme.color.gray[400],
    success: theme.color.success[600],
    warning: theme.color.warning[500],
    error: theme.color.error[500],
  },
  border: {
    primary: theme.color.primary[500],
    secondary: theme.color.secondary[400],
    gray: theme.color.gray[400],
    success: theme.color.success[600],
    warning: theme.color.warning[500],
    error: theme.color.error[500],
  },
  hoverBackground: {
    primary: theme.color.primary[700],
    secondary: theme.color.secondary[500],
    gray: theme.color.gray[500],
    success: theme.color.success[700],
    warning: theme.color.warning[600],
    error: theme.color.error[600],
  },
  activeBackground: {
    primary: theme.color.primary[800],
    secondary: theme.color.secondary[600],
    gray: theme.color.gray[600],
    success: theme.color.success[800],
    warning: theme.color.warning[700],
    error: theme.color.error[700],
  },
};

export const Button = styled.button<StyledButton>`
  border: 1px solid
    ${(props) =>
      props.concept === 'contained'
        ? props.theme.background[props.variant]
        : props.concept === 'outlined'
          ? props.theme.background[props.variant]
          : 'transparent'};
  background-color: ${(props) =>
    props.concept === 'contained'
      ? props.theme.background[props.variant]
      : 'transparent'};
  color: ${(props) =>
    props.concept === 'contained'
      ? props.theme.primaryText
      : props.theme.background[props.variant]};
  text-align: center;
  word-break: keep-all;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;

  ${({ size, $style }) => css`
    ${SIZE[size]}
    ${$style}
  `}

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
