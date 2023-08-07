import styled from 'styled-components';

import { TextSkeletonStyle } from '@Styles/skeleton';
import theme from '@Styles/theme';

type LoadingProps = {
  isLoading?: boolean;
};

export const Layout = styled.div<LoadingProps>`
  display: ${(props) => (props.isLoading ? 'flex' : 'grid')};
  flex-direction: column;
  justify-items: start;
  row-gap: 20px;

  padding: 20px;
  border-radius: 12px;

  background-color: ${theme.color.gray[50]};
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Name = styled.div<LoadingProps>`
  font-size: 2.4rem;

  ${(props) => props.isLoading && TextSkeletonStyle}
`;

export const Allergies = styled.div`
  color: ${theme.color.gray[400]};
`;
