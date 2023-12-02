import { RuleSet, css } from 'styled-components';

import { getHexOpacity } from '@Styles/common';
import theme from '@Styles/theme';

import { ThemeName } from '@Types/style';

export const AG_GRID_WRAPPER_THEME: Record<ThemeName, RuleSet> = {
  light: css`
    --ag-row-hover-color: ${`${theme.color.primary[100]}${getHexOpacity(0.5)}`};
    --ag-selected-row-background-color: ${theme.color.primary[100]};
    --ag-alpine-active-color: ${theme.color.primary[500]};
    --ag-input-focus-border-color: ${theme.color.primary[500]};

    .ag-select {
      :active {
        border: 1px solid ${theme.color.primary[500]};
      }
    }
  `,

  dark: css`
    --ag-row-hover-color: ${`${theme.color.primary[800]}${getHexOpacity(0.5)}`};
    --ag-selected-row-background-color: ${theme.color.primary[800]};
    --ag-alpine-active-color: ${theme.color.primary[500]};
    --ag-input-focus-border-color: ${theme.color.primary[500]};

    :active {
      border: 1px solid ${theme.color.primary[500]};
    }
  `,
};
