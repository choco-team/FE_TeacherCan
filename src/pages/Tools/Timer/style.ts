import styled from 'styled-components';

import { flexCustom } from '@Styles/common';
import theme from '@Styles/theme';

export const Layout = styled.div`
  ${flexCustom('column', 'center', 'center')};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 90%;
`;

export const TimerMemo = styled.div`
  padding: 20px 240px;
  border-radius: 20px;

  background-color: ${theme.color.gray[200]};

  font-weight: 600;
  font-size: 6rem;
`;

export const TimeContainer = styled.div`
  ${flexCustom('column', 'center', 'center')};
  min-width: 100%;
`;

export const Time = styled.span`
  font-size: 24vw;
  font-weight: 700;

  font-variant-numeric: tabular-nums;
`;

export const TimeBar = styled.div`
  min-width: 100%;
  height: 24px;

  border-radius: 4px;

  background-color: ${theme.color.primary[100]};
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
