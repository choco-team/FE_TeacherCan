import styled, { css, keyframes } from 'styled-components';

type ContainerProps = {
  isLoading?: boolean;
};

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

  ${({ isLoading }) => isLoading && TextSkeletonStyle}
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

// 아래의 내용은 merge 한 뒤, 리팩터링을 통해 분리하기

export const SkeletonAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const TextSkeletonStyle = css`
  border-radius: 1.5rem;
  color: transparent;
  background: linear-gradient(-90deg, #f3f9ff, #e8f3ff, #f3f9ff, #e8f3ff);
  background-size: 400%;
  animation: ${SkeletonAnimation} 5s infinite ease-in-out;
`;
