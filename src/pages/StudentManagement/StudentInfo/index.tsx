import { STUDENT_INFO_KEY_NAME } from '@Constant/studentManagement/studentInfo';
import { type ColDef, type GridOptions } from 'ag-grid-community';
import type { AgGridReact } from 'ag-grid-react';
import { MouseEvent, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa6';

import AgGrid from '@Components/AgGrid';
import Tab from '@Components/Tab';

import { MOCK_STUDENT_LISTS } from './mock';
import * as S from './style';

const defaultColumnDefs: ColDef[] = [
  {
    headerName: STUDENT_INFO_KEY_NAME.studentNumber,
    field: 'studentNumber',
    flex: 0.5,
    cellStyle: { textAlign: 'center' },
  },
  {
    headerName: STUDENT_INFO_KEY_NAME.studentName,
    field: 'studentName',
    minWidth: 180,
    flex: 1,
    cellStyle: { textAlign: 'center' },
  },
  {
    headerName: STUDENT_INFO_KEY_NAME.gender,
    field: 'gender',
    flex: 0.5,
    cellStyle: { textAlign: 'center' },
  },
  {
    headerName: '알러지',
    field: 'allergy',
    flex: 0.5,
    cellStyle: { textAlign: 'center' },
  },
];

const StudentInfo = () => {
  const studentListItems = MOCK_STUDENT_LISTS.sort(({ isMain }) =>
    isMain ? -1 : 1,
  );
  const [selectedStudentList, setSelectedStudentList] = useState(
    studentListItems[0],
  );

  const gridRef = useRef<AgGridReact>(null);
  const rowData = selectedStudentList.students.map(
    ({ columns, ...studentInfo }) => ({
      ...studentInfo,
      ...Object.fromEntries(columns.map(({ field, value }) => [field, value])),
    }),
  );

  const customColumnDefs: ColDef[] = selectedStudentList.columns.map(
    ({ field }) => ({ field, headerName: field }),
  );

  const columnDefs: ColDef[] = [...defaultColumnDefs, ...customColumnDefs];

  const gridOptions: GridOptions = {
    defaultColDef: {
      resizable: true,
      minWidth: 70,
    },
  };

  const handleClickStudentListItem = (event: MouseEvent<HTMLButtonElement>) => {
    const { value: selectedId } = event.currentTarget;
    const selectedItem = studentListItems.find(
      ({ id }) => id === Number(selectedId),
    );
    if (selectedItem) setSelectedStudentList(selectedItem);
  };

  return (
    <S.Layout>
      <Tab>
        {studentListItems.map(({ id, name, isMain }) => (
          <Tab.Button
            key={id}
            size="sm"
            concept="text"
            $isSelected={selectedStudentList.id === id}
            value={id}
            onClick={handleClickStudentListItem}
          >
            {isMain && <FaStar />}
            {name}
          </Tab.Button>
        ))}
      </Tab>

      <AgGrid
        ref={gridRef}
        gridOptions={gridOptions}
        rowData={rowData}
        columnDefs={columnDefs}
        fullHeight
      />
    </S.Layout>
  );
};

export default StudentInfo;
