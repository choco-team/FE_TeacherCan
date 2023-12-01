import { RuleSet, css } from 'styled-components';

import theme from '@Styles/theme';

import { ThemeName } from '@Types/style';

export const INPUT_THEME: Record<ThemeName, RuleSet> = {
  light: css`
    border: ${`1px solid ${theme.color.gray[300]}`};

    &:hover {
      border-color: ${theme.color.gray[400]};
    }

    &:focus {
      border-color: ${theme.color.primary[500]};
    }

    &::placeholder {
      color: ${theme.color.gray[700]};
    }

    &:disabled {
      background-color: ${theme.color.gray[600]};
      color: ${theme.color.gray[400]};
    }

    &:read-only,
    &:disabled {
      &:hover,
      &:focus {
        border-color: ${theme.color.gray[400]};
      }
    }
  `,

  dark: css`
    border: ${`1px solid ${theme.color.gray[600]}`};

    &:hover {
      border-color: ${theme.color.gray[500]};
    }

    &:focus {
      border-color: ${theme.color.primary[500]};
    }

    &::placeholder {
      color: ${theme.color.gray[600]};
    }

    &:disabled {
      background-color: ${theme.color.gray[600]};
      color: ${theme.color.gray[400]};
    }

    &:read-only,
    &:disabled {
      &:hover,
      &:focus {
        border-color: ${theme.color.gray[400]};
      }
    }
  `,
};
