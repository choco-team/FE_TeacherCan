import { AgGridReact } from 'ag-grid-react';
import { type ForwardedRef, forwardRef } from 'react';

import * as S from './style';
import * as T from './type';

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const AgGrid = (
  { gridOptions, rowData, fullHeight, minHeight, ...props }: T.AgGrid,
  ref: ForwardedRef<AgGridReact>,
) => {
  return (
    <S.AgGridWrapper
      className="ag-theme-alpine"
      fullHeight={fullHeight}
      minHeight={minHeight}
    >
      <AgGridReact
        ref={ref}
        gridOptions={{
          suppressDragLeaveHidesColumns: true,
          animateRows: true,
          ...gridOptions,
        }}
        rowData={rowData}
        {...props}
      />
    </S.AgGridWrapper>
  );
};

export default forwardRef(AgGrid);
