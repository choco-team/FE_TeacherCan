import { STUDENT_INFO_KEY_NAME } from '@Constant/studentManagement/studentInfo';
import { type ColDef, type GridOptions } from 'ag-grid-community';
import type { AgGridReact } from 'ag-grid-react';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa6';

import AgGrid from '@Components/AgGrid';

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
  const [hasScroll, setHasScroll] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
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

  const handleScrollTab = (scrollTo: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;

    scrollRef.current.scrollBy({
      top: 0,
      left: ((scrollTo === 'left' ? -1 : 1) * clientWidth) / 2,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!scrollRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const element = entries[0];
      const {
        contentRect: { width },
        target: { scrollWidth },
      } = element;

      setHasScroll(width < scrollWidth);
    });

    observer.observe(scrollRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <S.Layout>
      <S.TabContainer>
        {hasScroll && (
          <S.ScrollTabButton
            concept="text"
            onClick={() => handleScrollTab('left')}
          >
            <FaChevronLeft />
          </S.ScrollTabButton>
        )}
        <S.ScrollBox ref={scrollRef}>
          <S.StudentListTitleContainer>
            {studentListItems.map(({ id, name, isMain }) => (
              <S.StudentListTitleButton
                key={id}
                size="sm"
                concept="text"
                $isSelected={selectedStudentList.id === id}
                value={id}
                onClick={handleClickStudentListItem}
              >
                {isMain && <FaStar />}
                {name}
              </S.StudentListTitleButton>
            ))}
          </S.StudentListTitleContainer>
        </S.ScrollBox>
        {hasScroll && (
          <S.ScrollTabButton
            concept="text"
            onClick={() => handleScrollTab('right')}
          >
            <FaChevronRight />
          </S.ScrollTabButton>
        )}
      </S.TabContainer>

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
