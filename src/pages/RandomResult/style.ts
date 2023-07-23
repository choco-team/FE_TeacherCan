import { ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';

import Button from '@Components/Button';

import { flexCustom } from '@Styles/common';
import theme from '@Styles/theme';

interface RandomResultLayoutProps {
  backgroundImage: string;
}

export const RandomResultLayout = styled.div<RandomResultLayoutProps>`
  ${flexCustom('column', 'center', 'space-around')}
  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: burlywood;
  width: 100%;
  min-height: 480px;
  max-width: 880px;
  margin-top: 10%;
  border-radius: 10px;
  margin-left: 10%;
  margin-right: 10%;
`;

export const ChoosedComponentsContainer = styled.div`
  ${flexCustom('row', 'center', 'flex-start')}
  width: 100%;
  max-width: 720px;
  border: 3px solid ${theme.color.primary[500]};
  border-radius: 3px;
  margin: 20px 0 20px 0;
  padding: 16px;
`;

interface UpDownWrapperProps extends HTMLAttributes<HTMLDivElement> {
  alignItems?: string;
  justifyContent?: string;
  children?: ReactNode;
}

interface ResultDivProps {
  color: string;
}

export const UpDownWrapper = styled.div<UpDownWrapperProps>`
  display: flex;
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  width: 100%;
  padding: 0;
  margin-left: 0;
`;

export const ResultDiv = styled.div<ResultDivProps>`
  padding: 168px 0px;
  color: ${(props) => props.color};
  font-weight: bold;
  font-size: 3rem;
`;

export const RandomPickBackgroundButton = styled(Button)`
  ${flexCustom('row', 'center', 'center')}
  width: 48px;
  min-width: 48px;
  height: 48px;
  margin: 8px;
  border-radius: 50%;
  font-size: 32px;
`;
