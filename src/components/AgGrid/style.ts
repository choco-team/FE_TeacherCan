import styled from 'styled-components';

import { getHexOpacity } from '@Styles/common';

export const AgGridWrapper = styled.div<{
  fullHeight?: boolean;
  minHeight?: number;
}>`
  width: 100%;
  height: ${({ fullHeight }) => (fullHeight ? '100%' : undefined)};
  min-height: ${({ minHeight }) => `${minHeight}px`};

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
