import { CSSProperties } from 'react';
import styled from 'styled-components';

import Button from '@Components/Button';
import Input from '@Components/Input';

import { flexCustom, getHexOpacity } from '@Styles/common';

export const Layout = styled.div`
  ${flexCustom('row', 'flex-start', 'stretch', '24px')}
  padding: 24px;
  color: ${({ theme }) => theme.text};
`;

export const CoulmnContainer = styled.div<{
  gap?: CSSProperties['gap'];
  flex?: CSSProperties['flex'];
}>`
  ${flexCustom('column', 'flex-start', 'flex-start')}
  gap: ${({ gap = '16px' }) => gap};
  flex: ${({ flex }) => flex};
  width: 100%;
`;

export const RowContainer = styled.div<{
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  gap?: CSSProperties['gap'];
  maxWidth?: CSSProperties['maxWidth'];
}>`
  ${({ alignItems = 'center', justifyContent = 'flex-start', gap }) =>
    flexCustom('row', alignItems, justifyContent, gap)}
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.accentText};
  line-height: 1.8rem;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const List = styled.ul`
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.sectionBackground};
  border-radius: 10px;
  color: ${({ theme }) => theme.grayText};
  font-size: 1.4rem;

  li:not(:last-of-type) {
    padding-bottom: 1rem;
  }
`;

export const ListItem = styled.li`
  margin-left: 1rem;
  list-style-type: disc;

  &::marker {
    color: ${({ theme }) => theme.subText};
  }
`;

export const TabButton = styled(Button)<{ isOnFocus: boolean }>`
  border-radius: 10px 10px 0 0;
  border: none;
  border-bottom: 2px solid transparent;
  border-color: ${({ isOnFocus, theme }) =>
    isOnFocus ? theme.border.primary : 'transparent'};

  &:hover,
  &:active {
    border-color: ${({ isOnFocus, theme }) =>
      isOnFocus ? theme.border.primary : 'transparent'};
  }
`;

export const TabContainer = styled.div`
  ${flexCustom('column', 'flex-start', 'flex-start', '16px')}
  width: 100%;
  padding: 24px 0;
`;

export const Label = styled.div``;

// TODO: 공통 컴포넌트로 추출
export const Select = styled.select`
  min-width: 6rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.border.gray};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background.gray};
  color: ${({ theme }) => theme.grayText};
  text-align: center;
`;

export const FileInput = styled(Input)`
  white-space: nowrap;
  text-overflow: ellipsis;

  &::-webkit-file-upload-button,
  &::file-selector-button {
    padding: 8px;
    margin-right: 8px;
    background-color: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.primaryText};
    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.hoverBackground.primary};
    }
  }
`;

export const TableHeaderContainer = styled.div`
  ${flexCustom('row', 'flex-end', 'space-between', '16px')}
  width: 100%;
  margin-top: 4px;
`;

export const GenderButton = styled(Button)<{ position: 'left' | 'right' }>`
  min-width: auto;
  padding: 0.5rem 0.8rem;
  border-width: 2px;
  border-left-width: ${({ position }) => position === 'right' && '1px'};
  border-right-width: ${({ position }) => position === 'left' && '1px'};
  border-radius: ${({ position }) =>
    ({ left: '5px 0 0 5px', right: '0 5px 5px 0' }[position])};
  font-size: 1.4rem;
`;

// TODO: 공통 컴포넌트로 추출
export const AgGridWrapper = styled.div`
  width: 100%;
  height: 720px;

  --ag-row-hover-color: ${({ theme }) =>
    `${theme.selectionBackground.primary}${getHexOpacity(0.5)}`};
  --ag-selected-row-background-color: ${({ theme }) =>
    theme.selectionBackground.primary};
  --ag-alpine-active-color: ${({ theme }) => theme.background.primary};
  --ag-input-border-color: transparent;
  --ag-input-focus-border-color: ${({ theme }) => theme.border.primary};

  .ag-header-cell-label {
    justify-content: center;
  }

  .ag-select {
    :active {
      border: 1px solid ${({ theme }) => theme.border.primary};
    }

    .ag-picker-field-wrapper {
      border: none;
      border-radius: var(--ag-card-radius);
    }
  }

  .ag-picker-field-icon {
    color: ${({ theme }) => theme.accentText};

    .ag-icon {
      font-size: 1.8rem;
    }
  }
`;
