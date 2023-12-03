import { RuleSet, css } from 'styled-components';

import theme from '@Styles/theme';

import type { ButtonSize } from './type';

export const SIZE: Record<ButtonSize, RuleSet> = {
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

export const VARIANT = {
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
