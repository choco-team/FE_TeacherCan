import { RuleSet, css } from 'styled-components';

import theme from '@Styles/theme';

import { ThemeName } from '@Types/style';

export const LAYOUT_CATEGORY: Record<'main' | 'middle', RuleSet> = {
  main: css`
    padding: 16px;
    font-size: 2rem;
    line-height: 2rem;
  `,
  middle: css`
    font-size: 1.8rem;
    line-height: 1.8rem;
  `,
};

export const SIDE_NAVIGATION_LINK_THEME = (
  concept: ThemeName,
  isSelected: boolean,
) => {
  const options: Record<ThemeName, RuleSet> = {
    light: css`
      color: ${isSelected ? theme.color.primary[500] : theme.color.gray[400]};
      background-color: ${isSelected
        ? theme.color.primary[100]
        : 'transparent'};

      &:hover {
        background-color: ${theme.color.primary[100]};
      }
    `,

    dark: css`
      color: ${isSelected ? theme.color.primary[100] : theme.color.gray[300]};
      background-color: ${isSelected
        ? theme.color.primary[500]
        : 'transparent'};

      &:hover {
        background-color: ${theme.color.primary[500]};
      }
    `,
  };

  return options[concept];
};
