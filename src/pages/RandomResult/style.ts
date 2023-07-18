import { ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';

import background from '@Assets/image/background/randomResult-bg.png';

import { flexCustom } from '@Styles/common';
import theme from '@Styles/theme';

export const RandomResultLayout = styled.div`
  ${flexCustom('column', 'center', 'center')}
  background-image: url(${background});
  width: 100%;
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

export const UpDownWrapper = styled.div<UpDownWrapperProps>`
  display: flex;
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  width: 100%;
  padding: 0;
  margin-left: 0;
`;
