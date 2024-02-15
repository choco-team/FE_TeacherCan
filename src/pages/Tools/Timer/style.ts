import styled, { RuleSet, css } from 'styled-components';

import { flexCustom } from '@Styles/common';
import theme from '@Styles/theme';

import { ThemeName } from '@Types/style';

export const Layout = styled.div`
  ${flexCustom('column', 'center', 'center')};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 90%;
`;

const TIMER_MEMO_THEME: Record<ThemeName, RuleSet> = {
  light: css`
    background-color: ${theme.color.gray[200]};
  `,

  dark: css`
    background-color: ${theme.color.gray[700]};
  `,
};

export const TimerMemo = styled.div`
  max-width: 100%;
  /* width: 100%; */

  padding: 20px 60px;
  border-radius: 20px;

  font-weight: 600;
  font-size: 6rem;

  text-align: center;

  ${({ theme }) => css`
    ${TIMER_MEMO_THEME[theme.name]};
  `}
`;

export const TimeContainer = styled.div`
  ${flexCustom('column', 'center', 'center')};
  min-width: 100%;
`;

const TIMER_THEME: Record<ThemeName, RuleSet> = {
  light: css`
    &:hover {
      background-color: ${theme.color.gray[200]};
    }
  `,

  dark: css`
    &:hover {
      background-color: ${theme.color.gray[700]};
    }
  `,
};

export const Time = styled.span`
  width: 100%;

  margin: 40px 0px;

  font-size: 24vw;
  font-weight: 700;
  text-align: center;

  line-height: 100%;

  font-variant-numeric: tabular-nums;
  transition: background-color 0.2s ease;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => css`
    ${TIMER_THEME[theme.name]};
  `}
`;

export const TimeBar = styled.div`
  min-width: 100%;
  height: 24px;

  background-color: ${theme.color.primary[100]};
`;

export const ProgressBar = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => `${progress}%`};

  background-color: ${theme.color.primary[500]};
`;

export const TimerButtonWrapper = styled.div`
  display: flex;
  gap: 60px;
`;

export const TimerButton = styled.div`
  ${flexCustom('row', 'center', 'center')}

  margin-top: 40px;

  width: 100px;
  height: 100px;
  border-radius: 50%;

  background-color: ${theme.color.primary[500]};
  color: ${theme.color.white};

  font-size: 4rem;

  cursor: pointer;
`;
