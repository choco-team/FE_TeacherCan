import { CSSProperties } from 'react';
import styled from 'styled-components';

import Button from '@Components/Button';
import Input from '@Components/Input';

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

export const RowContainer = styled.div<{
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  gap?: CSSProperties['gap'];
  flex?: CSSProperties['flex'];
  width?: CSSProperties['width'];
  maxWidth?: CSSProperties['maxWidth'];
}>`
  ${({ alignItems = 'center', justifyContent = 'flex-start', gap }) =>
    flexCustom('row', alignItems, justifyContent, gap)}
  flex: ${({ flex }) => flex};
  width: ${({ width }) => width ?? '100%'};
  max-width: ${({ maxWidth }) => maxWidth};
`;

export const Title = styled.h1`
  margin-bottom: 16px;
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
  width: 8rem;
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

export const GrayText = styled.span`
  color: ${({ theme }) => theme.grayText};
  font-size: 1.4rem;
`;

export const GridButtonContainer = styled.div`
  ${flexCustom('row', 'center', 'space-between', '16px')}
  width: 100%;
`;

export const GridButton = styled(Button)`
  ${flexCustom('row', 'center', 'center', '0.5rem')}

  svg {
    font-size: 1.6rem;
  }
`;

export const GenderButton = styled(Button)<{ position: 'left' | 'right' }>`
  min-width: auto;
  padding: 0.4rem 0.8rem;
  border-width: 2px;
  border-left-width: ${({ position }) => position === 'right' && '1px'};
  border-right-width: ${({ position }) => position === 'left' && '1px'};
  border-radius: ${({ position }) =>
    ({ left: '5px 0 0 5px', right: '0 5px 5px 0' })[position]};
  font-size: 1.4rem;
`;

export const CreateButton = styled(Button)`
  align-self: end;
`;
