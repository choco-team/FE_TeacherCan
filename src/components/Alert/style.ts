import styled from 'styled-components';

import * as T from './type';

const color = {
  success: '#21c55e',
  error: '#f04444',
} as const;

export const Alert = styled.div<T.StyledAlert>`
  width: 320px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: ${({ type, isReverse }) =>
    isReverse ? color[type] : 'white'};
  color: ${({ type, isReverse }) => (isReverse ? 'white' : color[type])};
`;

export const Text = styled.div`
  padding: 20px 20px 15px;
`;

export const DurationBar = styled.div<T.StyledDurationBar>`
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background-color: ${({ type, isReverse }) =>
    isReverse ? 'white' : color[type]};
  --webkit-animation: duration ${({ duration }) => duration}s linear both;
  animation: duration ${({ duration }) => duration}s linear both;

  @--webkit-keyframes duration {
    from {
      width: 100%;
    }

    to {
      width: 0;
    }
  }

  @keyframes duration {
    from {
      width: 100%;
    }

    to {
      width: 0;
    }
  }
`;
