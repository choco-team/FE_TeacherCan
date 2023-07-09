import styled, { css } from 'styled-components';

import { flexCustom } from '@Styles/common';

import { NavigationLink } from './type';

type LayoutProps = Pick<NavigationLink, 'category' | 'isSelected'>;

export const Layout = styled.div<LayoutProps>`
  padding: ${(props) => (props.category === 'main' ? '16px' : '0')};
  border-bottom: ${(props) =>
    props.category === 'main' && props.isSelected
      ? `2px solid ${props.theme.accentText}`
      : '2px solid transparent'};

  ${flexCustom('row', 'center', 'center')}
  text-align:center;

  font-size: ${(props) => (props.category === 'main' ? '2rem' : '1.8rem')};
  line-height: ${(props) => (props.category === 'main' ? '2rem' : '1.8rem')};
  letter-spacing: 0.1rem;
  color: ${(props) =>
    props.isSelected ? props.theme.accentText : props.theme.subText};

  ${(props) => props.category === 'middle' && SideNavigationLink}

  a {
    min-width: 100%;
  }
`;

const SideNavigationLink = css<LayoutProps>`
  display: flex;

  text-align: start;
  padding: 16px 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;

  font-weight: ${(props) => (props.isSelected ? 600 : 400)};
  color: ${(props) =>
    props.isSelected ? props.theme.accentText : props.theme.subText};
  background-color: ${(props) =>
    props.isSelected ? props.theme.color.primary[100] : 'transparent'};

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.color.primary[100]};
  }

  svg {
    position: relative;
    top: 0.2rem;
    margin-right: 1rem;
  }
`;

export const LinkName = styled.span``;
