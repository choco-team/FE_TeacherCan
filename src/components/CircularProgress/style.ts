import styled, { css } from 'styled-components';

import theme from '@Styles/theme';

import { Props, SIZE } from './type';

export const StyledCircularProgress = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    position: absolute;
    border-radius: 50%;
    animation: loading-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

    border: 2px solid ${theme.color.primary[500]};
    border-color: ${theme.color.primary[500]} transparent transparent
      transparent;

    ${({ size = 'medium', $style }) => css`
      width: ${SIZE[size]};
      height: ${SIZE[size]};

      ${$style}
    `}
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes loading-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
