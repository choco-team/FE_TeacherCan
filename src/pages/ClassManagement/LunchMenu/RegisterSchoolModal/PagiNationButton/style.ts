import styled from 'styled-components';

import { flexCustom } from '@Styles/common';

type LayoutProps = {
  $hasPage: boolean;
};

export const Layout = styled.div<LayoutProps>`
  ${flexCustom('row', 'center', 'center')}
  gap: 10px;

  margin-top: 10px;
  color: ${(props) => (props.$hasPage ? props.theme.grayText : 'transparent')};

  svg {
    cursor: ${(props) => props.$hasPage && 'pointer'};
  }
`;
