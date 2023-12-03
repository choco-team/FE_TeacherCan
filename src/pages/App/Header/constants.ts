import { css } from 'styled-components';

import theme from '@Styles/theme';

import { ThemeStyleSet } from '@Types/style';

export const LAYOUT_THEME: ThemeStyleSet = {
  light: css`
    border-bottom: 1px solid ${theme.color.gray[200]};
  `,

  dark: css`
    border-bottom: 1px solid ${theme.color.gray[700]};
  `,
};
