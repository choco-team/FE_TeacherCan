import { ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';

import Button from '@Components/Button';

import { flexCustom } from '@Styles/common';
import theme from '@Styles/theme';

interface RandomResultLayoutProps {
  backgroundImage: string;
}

export const Layout = styled.div`
  ${flexCustom('column', 'center', 'center')}
  width: 100%;
  height: 100%;
`;

export const RandomResult = styled.div<RandomResultLayoutProps>`
  ${flexCustom('column', 'center', 'space-between')}
  width: 100%;
  aspect-ratio: 5/3;
  max-width: 896px;
  margin: auto;
  border-radius: 10px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: burlywood;
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

interface ResultWrapperProps {
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

export const ResultWrapper = styled.div<ResultWrapperProps>`
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
