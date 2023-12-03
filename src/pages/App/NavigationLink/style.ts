import styled, { css } from 'styled-components';

import { flexCustom } from '@Styles/common';

import { LAYOUT_CATEGORY, SIDE_NAVIGATION_LINK_THEME } from './constatns';
import { LayoutProps } from './type';

export const Layout = styled.div<LayoutProps>`
  ${flexCustom('row', 'center', 'center')}
  text-align:center;
  letter-spacing: 0.1rem;

  ${(props) => props.category === 'middle' && SideNavigationLink}

  a {
    min-width: 100%;
  }

  ${({ theme, category, isSelected }) => css`
    border-bottom: ${category === 'main' && isSelected
      ? `2px solid ${theme.accentText}`
      : '2px solid transparent'};

    color: ${isSelected ? theme.accentText : theme.grayText};

    ${LAYOUT_CATEGORY[category]};
  `}

  ${({ category }) => category === 'middle' && SideNavigationLink}
`;

const SideNavigationLink = css<LayoutProps>`
  display: flex;

  text-align: start;
  padding: 16px 20px;
  border-radius: 10px;
  margin-bottom: 20px;

  svg {
    position: relative;
    top: 0.2rem;
    margin-right: 1rem;
  }

  ${({ isSelected, theme }) => css`
    font-weight: ${isSelected ? 600 : 400};
    ${SIDE_NAVIGATION_LINK_THEME(theme.name, isSelected)}
  `}
`;

export const LinkName = styled.span``;
