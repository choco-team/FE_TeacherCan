import styled from 'styled-components';

import { BadgeSkeletonStyle } from '@Styles/skeleton';

import { ContainerProps } from './type';

export const Layout = styled.span`
  display: inline-block;

  min-width: 12rem;

  border-radius: 1.5rem;

  background-color: #f3f9ff;
`;

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 0.5rem;
  align-items: center;

  padding: 1rem 2rem;

  ${({ isLoading }) => isLoading && BadgeSkeletonStyle}
`;

export const WeatherIcon = styled.img`
  width: 2rem;
`;

export const Temperature = styled.div``;

export const Dust = styled.div``;

export const RejectMessage = styled.div`
  position: relative;

  padding: 1rem 2rem;

  color: #1f2937;
`;
