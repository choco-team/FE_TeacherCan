import { ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';

import { flexCustom } from '@Styles/common';
import theme from '@Styles/theme';

export const Layout = styled.div`
  ${flexCustom('column', 'center', 'center')}
  width: 100%;
  height: 100%;
`;

export const RandomSelectContainer = styled.div`
  ${flexCustom('column', 'center', 'space-between')}
  width: 100%;
  aspect-ratio: 5/3;
  max-width: 896px;
  background-color: ${(props) => props.theme.background.gray};
  margin: auto;
  border-radius: 10px;
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
