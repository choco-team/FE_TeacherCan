import styled from 'styled-components';

import { NavigationLink } from './type';

type LayoutProps = Pick<NavigationLink, 'category' | 'isSelected'>;

export const Layout = styled.div<LayoutProps>`
  font-size: 2rem;
  color: ${(props) =>
    props.isSelected ? props.theme.accentText : props.theme.subText};
`;
