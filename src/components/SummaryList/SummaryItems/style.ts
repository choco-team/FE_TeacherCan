import styled from 'styled-components';

import { TextSkeletonStyle } from '@Styles/skeleton';

import { SummaryTextProps } from '../type';

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
