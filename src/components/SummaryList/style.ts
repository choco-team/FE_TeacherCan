import styled from 'styled-components';

import { TextSkeletonStyle } from '@Styles/skeleton';

import type { LayoutProps, SummaryTextProps } from './type';

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

export const SummaryItem = styled.li`
  padding: 1.5rem 0rem;
  border-top: 0.05rem solid #e2e2e2;

  line-height: 160%;

  :last-child {
    padding-bottom: 0rem;
  }
`;

export const SummaryText = styled.div<SummaryTextProps>`
  line-height: 160%;

  ${({ isLoading }) => isLoading && TextSkeletonStyle}
`;

export const NoSummaryItem = styled.div`
  padding: 4rem;
  border-top: 0.05rem solid #e2e2e2;

  text-align: center;
`;

export const NoSummaryMessage = styled.div`
  margin-bottom: 1rem;

  font-weight: 700;
`;

export const NoSummaryGuideMessage = styled.div`
  color: ${({ theme }) => theme.subText};
  line-height: 160%;
`;
