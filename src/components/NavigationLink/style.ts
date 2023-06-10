import styled, { css } from 'styled-components';

import { NavigationLink } from './type';

type LayoutProps = Pick<NavigationLink, 'category' | 'isSelected'>;

export const Layout = styled.div<LayoutProps>`
  padding-bottom: ${(props) => (props.category === 'main' ? '1rem' : '0rem')};
  border-bottom: ${(props) =>
    props.category === 'main' && props.isSelected
      ? `2px solid ${props.theme.accentText}`
      : 'none'};

  text-align: center;
  font-size: ${(props) => (props.category === 'main' ? '2rem' : '1.6rem')};
  color: ${(props) =>
    props.isSelected ? props.theme.accentText : props.theme.subText};

  ${(props) => props.category === 'middle' && SideNavigationLink}

  a {
    min-width: 100%;
  }
`;

const SideNavigationLink = css`
  display: flex;

  text-align: start;
  padding: 1.6rem 2rem;
  border-radius: 1rem;

  transition: background-color 0.1s ease;

  &:hover {
    background-color: ${(props) => props.theme.color.primary[100]};
  }

  svg {
    position: relative;
    top: 0.2rem;
    margin-right: 1rem;
  }
`;
