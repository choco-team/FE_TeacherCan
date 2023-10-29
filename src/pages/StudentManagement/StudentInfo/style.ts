import { type CSSProperties } from 'react';
import styled from 'styled-components';

import Button from '@Components/Button';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  ${flexCustom('column', 'initial', 'initial')}
  height: 100%;
`;

export const ColumnContainer = styled.div<{
  gap?: CSSProperties['gap'];
  flex?: CSSProperties['flex'];
  height?: CSSProperties['height'];
}>`
  ${flexCustom('column', 'flex-start', 'flex-start')}
  gap: ${({ gap = '16px' }) => gap};
  flex: ${({ flex }) => flex};
  width: 100%;
  height: ${({ height }) => height};
`;

export const TabContainer = styled.div`
  ${flexCustom('row', 'flex-start', 'center', '8px')}
  width: 100%;
`;

export const ScrollTabButton = styled(Button)`
  ${flexCustom('row', 'center', 'center')}
  margin-top: 0.25rem;
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  padding: 0;
  border-radius: 50%;
`;

export const ScrollBox = styled.div`
  width: 100%;
  padding-bottom: 5px;
  margin-bottom: 8px;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.border.gray};
    border-radius: 10px;
  }
`;

export const StudentListTitleContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
  width: max-content;
`;

export const StudentListTitleButton = styled(Button)<{
  $isSelected: boolean;
}>`
  ${flexCustom('row', 'center', 'center', '0.25rem')}
  border: none;
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.selectionBackground.primary : 'transparent'};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.accentText : theme.subText};
  font-weight: ${({ $isSelected }) => ($isSelected ? 600 : 400)};
  line-height: var(--title-button-line-height);

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.selectionBackground.primary};
  }

  svg {
    color: ${({ theme }) => theme.color.warning[400]};
  }
`;
