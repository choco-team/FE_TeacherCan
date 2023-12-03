import { RuleSet, css } from 'styled-components';

import theme from '@Styles/theme';

import { ThemeName } from '@Types/style';

export const LAYOUT_THEME: Record<ThemeName, RuleSet> = {
  light: css`
    border-bottom: 1px solid ${theme.color.gray[200]};
  `,

  dark: css`
    border-bottom: 1px solid ${theme.color.gray[700]};
  `,
};
