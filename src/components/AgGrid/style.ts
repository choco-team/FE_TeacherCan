import styled, { css } from 'styled-components';

import { AG_GRID_WRAPPER_THEME } from './constants';

export const AgGridWrapper = styled.div<{
  fullHeight?: boolean;
  minHeight?: number;
}>`
  width: 100%;
  font-family: inherit;

  --ag-input-border-color: transparent;

  .ag-header-cell-label {
    justify-content: center;
  }

  .ag-select {
    .ag-picker-field-wrapper {
      border: none;
      border-radius: var(--ag-card-radius);
    }
  }

  .ag-picker-field-icon {
    .ag-icon {
      font-size: 1.8rem;
    }
  }

  ${({ theme, fullHeight, minHeight }) => css`
    height: ${fullHeight ? '100%' : undefined};
    min-height: ${`${minHeight}px`};

    .ag-picker-field-icon {
      color: ${theme.accentText};
    }

    ${AG_GRID_WRAPPER_THEME[theme.name]}
  `}
`;
