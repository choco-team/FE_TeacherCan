import { css, keyframes } from 'styled-components';

const SkeletonAnimation = keyframes`
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

export const BadgeSkeletonStyle = css`
  border-radius: 1.5rem;
  color: transparent;
  background: linear-gradient(-90deg, #f3f9ff, #e8f3ff, #f3f9ff, #e8f3ff);
  background-size: 400%;
  animation: ${SkeletonAnimation} 5s infinite ease-in-out;
`;
