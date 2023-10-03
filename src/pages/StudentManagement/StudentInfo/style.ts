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

export const AccordionContainer = styled.div`
  ${flexCustom('row', 'flex-start', 'flex-start', '0.5rem')}
  margin-bottom: 0.5rem;
`;

export const AccordionToggleButton = styled(Button)<{
  $isOpenAccordion: boolean;
}>`
  ${flexCustom('row', 'center', 'center')}
  width: 2.4rem;
  min-width: 2.4rem;
  height: 2.4rem;
  padding: 0;
  border-radius: 50%;
  transform: ${({ $isOpenAccordion }) => $isOpenAccordion && 'rotate(-180deg)'};

  -webkit-transition: transform 0.3s ease;
  transition: transform 0.3s ease;
`;

export const StudentListTitleContainer = styled.div<{
  $isOpenAccordion: boolean;
}>`
  --title-button-line-height: 1.8rem;

  ${flexCustom('row', 'flex-start', 'flex-start', '1rem')}
  row-gap: 0.5rem;
  flex-wrap: wrap;
  height: ${({ $isOpenAccordion }) =>
    $isOpenAccordion
      ? 'auto'
      : 'calc(var(--title-button-line-height) + 0.4rem * 2)'};
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
