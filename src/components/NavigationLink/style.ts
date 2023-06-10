import styled from 'styled-components';

import { NavigationLink } from './type';

type LayoutProps = Pick<NavigationLink, 'category' | 'isSelected'>;

export const Layout = styled.div<LayoutProps>`
  max-width: 12rem;

  padding-bottom: ${(props) => (props.category === 'main' ? '1rem' : '0rem')};
  border-bottom: ${(props) =>
    props.category === 'main' && props.isSelected
      ? `2px solid ${props.theme.accentText}`
      : 'none'};

  text-align: center;
  font-size: 2rem;
  color: ${(props) =>
    props.isSelected ? props.theme.accentText : props.theme.subText};
`;
