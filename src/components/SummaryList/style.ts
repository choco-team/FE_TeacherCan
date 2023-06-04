import styled from 'styled-components';

import type { LayoutProps } from './type';

export const Layout = styled.div<LayoutProps>`
  display: grid;
  row-gap: 1.5rem;

  width: ${({ width }) => width};
  padding: 1.5rem;
  border-radius: 0.5rem;

  box-shadow: 0rem 0.2rem 1.5rem rgba(198, 198, 198, 0.25);

  background: ${({ theme }) => theme.background.basic};

  color: ${({ theme }) => theme.text};
`;

export const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 700;

  line-height: 160%;
`;

export const SummaryList = styled.ul`
  display: grid;
`;
