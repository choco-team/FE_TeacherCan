import { STUDENT_INFO_KEY_NAME } from '@Constant/studentManagement/studentInfo';
import type { GridOptions } from 'ag-grid-community';
import type { AgGridReact } from 'ag-grid-react';
import { type ChangeEvent, type MouseEvent, useRef, useState } from 'react';
import { AiOutlineUserAdd, AiOutlineUserDelete } from 'react-icons/ai';
import { BsSortNumericDown } from 'react-icons/bs';

import useExcelRegister from '@Hooks/studentManagement/studentRegister/useExcelRegister';
import useManualRegister from '@Hooks/studentManagement/studentRegister/useManualRegister';
import useStudentListGrid from '@Hooks/studentManagement/studentRegister/useStudentListGrid';

import AgGrid from '@Components/AgGrid';
import Button from '@Components/Button';
import Input from '@Components/Input';
import TextArea from '@Components/TextArea';

import { CREATE_TYPE, STUDENT_REGISTER_GUIDES } from './constant';
import * as S from './style';
import * as T from './type';

const StudentRegister = () => {
  const [studentListInfo, setStudentListInfo] = useState({
    title: '',
    description: '',
  });
  const [studentList, setStudentList] = useState<T.StudentBaseInfo[]>([]);
  const [createType, setCreateType] = useState<
    (typeof CREATE_TYPE)[keyof typeof CREATE_TYPE]
  >(CREATE_TYPE.xlsx);

  const gridRef = useRef<AgGridReact>(null);

  const { handleChangeExcelFile, handleDownloadExcelSample } = useExcelRegister(
    { setStudentList },
  );

  const {
    studentsCount,
    handleChangeStudentsCount,
    handleManuallyAddStudentList,
  } = useManualRegister({ studentList, setStudentList });

  const {
    handleAddRow,
    handleRemoveSelectedRow,
    handleSortByStudentNumberAsc,
    handleUpdateRowsOnDragEnd,
    handleSelectGender,
  } = useStudentListGrid({ gridRef, setStudentList });

  const gridOptions: GridOptions = {
    columnDefs: [
      {
        headerName: STUDENT_INFO_KEY_NAME.studentNumber,
        field: 'studentNumber',
        flex: 0.5,
        minWidth: 120,
        cellEditor: 'agNumberCellEditor',
        cellEditorParams: {
          min: 1,
          max: 100,
          precision: 0,
        },
        headerCheckboxSelection: true,
        checkboxSelection: true,
      },
      {
        headerName: STUDENT_INFO_KEY_NAME.studentName,
        field: 'studentName',
        minWidth: 180,
        flex: 2,
      },
      {
        headerName: STUDENT_INFO_KEY_NAME.gender,
        field: 'gender',
        flex: 1,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: [STUDENT_INFO_KEY_NAME.male, STUDENT_INFO_KEY_NAME.female],
        },
      },
    ],

    defaultColDef: {
      resizable: true,
      minWidth: 70,
      cellStyle: { textAlign: 'center' },
      editable: true,
    },
    editType: 'fullRow',
    stopEditingWhenCellsLoseFocus: true,
    rowSelection: 'multiple',
    suppressRowClickSelection: true,
    rowDragManaged: true,
    rowDragMultiRow: true,
    rowDragEntireRow: true,
    overlayNoRowsTemplate:
      '<div style="padding: 16px; color: gray;">엑셀 파일을 업로드하거나 학생 수를 직접 입력하여 명렬표를 생성해 주세요.</div>',
  };

  const handleChangeCreateType = (event: MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    if (value === CREATE_TYPE.xlsx || value === CREATE_TYPE.manual)
      setCreateType(value);
  };

  const handleChangeStudentListInfo = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setStudentListInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = () => {
    // TODO: 필수값 체크 - 제목, 번호, 이름, 성별
    console.log(studentList);
  };

  return (
    <S.Layout>
      <S.Title>명렬표 등록</S.Title>
      <S.RowContainer
        alignItems="flex-start"
        justifyContent="stretch"
        gap="24px"
        flex={1}
      >
        <S.ColumnContainer gap="24px" flex="1 1 0">
          <S.List>
            {STUDENT_REGISTER_GUIDES.map((guide, index) => (
              <S.ListItem key={index + guide}>{guide}</S.ListItem>
            ))}
          </S.List>

          <S.ColumnContainer gap="8px">
            <S.Label>명렬표 제목</S.Label>
            <Input
              placeholder="6-1 3월 학생 명단"
              width="100%"
              maxWidth="100%"
              name="title"
              value={studentListInfo.title}
              onChange={handleChangeStudentListInfo}
            />
          </S.ColumnContainer>

          <S.ColumnContainer gap="8px">
            <S.Label>
              명렬표 설명<S.GrayText> (선택)</S.GrayText>
            </S.Label>
            <TextArea
              placeholder="3월 출석 기록용 명단입니다."
              rows={3}
              name="description"
              value={studentListInfo.description}
              onChange={handleChangeStudentListInfo}
            />
          </S.ColumnContainer>

          <S.ColumnContainer gap="8px">
            <S.RowContainer alignItems="stretch" gap="8px">
              {[
                { tabValue: CREATE_TYPE.xlsx, tabName: '엑셀 파일 업로드' },
                { tabValue: CREATE_TYPE.manual, tabName: '직접 입력' },
              ].map(({ tabValue, tabName }) => (
                <S.TabButton
                  key={tabValue}
                  value={tabValue}
                  isOnFocus={createType === tabValue}
                  concept="outlined"
                  size="lg"
                  onClick={handleChangeCreateType}
                >
                  {tabName}
                </S.TabButton>
              ))}
            </S.RowContainer>

            {createType === CREATE_TYPE.xlsx && (
              <S.TabContainer>
                <S.RowContainer
                  alignItems="baseline"
                  justifyContent="space-between"
                  gap="16px"
                >
                  <S.Label>명렬표 엑셀 파일 업로드</S.Label>
                  <Button size="sm" onClick={handleDownloadExcelSample}>
                    엑셀 양식 다운로드
                  </Button>
                </S.RowContainer>
                <S.FileInput
                  type="file"
                  width="100%"
                  maxWidth="100%"
                  dense
                  value=""
                  onChange={handleChangeExcelFile}
                />
              </S.TabContainer>
            )}

            {createType === CREATE_TYPE.manual && (
              <S.TabContainer>
                <S.RowContainer gap="8px">
                  <S.RowContainer gap="8px" flex={1} width="auto">
                    <S.Label>학생 수</S.Label>
                    <S.Select
                      value={studentsCount}
                      onChange={handleChangeStudentsCount}
                    >
                      <option value="">선택</option>
                      {Array.from({ length: 100 }).map((_, index) => (
                        <option key={index}>{index + 1}</option>
                      ))}
                    </S.Select>
                  </S.RowContainer>
                  <Button onClick={handleManuallyAddStudentList}>
                    명렬표 생성
                  </Button>
                </S.RowContainer>
              </S.TabContainer>
            )}
          </S.ColumnContainer>
        </S.ColumnContainer>

        <S.ColumnContainer gap="8px" flex="1.5 1 0" height="100%">
          <S.Label>기초사항 등록</S.Label>
          <S.GrayText>각 행을 드래그해서 순서를 바꿀 수 있습니다.</S.GrayText>
          <S.GridButtonContainer>
            <S.RowContainer gap="8px">
              <S.GridButton variant="success" size="sm" onClick={handleAddRow}>
                <AiOutlineUserAdd />
                학생 추가
              </S.GridButton>
              <S.GridButton
                variant="error"
                size="sm"
                onClick={handleRemoveSelectedRow}
              >
                <AiOutlineUserDelete />
                선택 학생 삭제
              </S.GridButton>
              <S.GridButton size="sm" onClick={handleSortByStudentNumberAsc}>
                <BsSortNumericDown />
                번호 오름차순 정렬
              </S.GridButton>
            </S.RowContainer>
            <S.RowContainer maxWidth="fit-content">
              <S.GenderButton
                value={STUDENT_INFO_KEY_NAME.male}
                concept="outlined"
                size="sm"
                position="left"
                onClick={handleSelectGender}
              >
                {STUDENT_INFO_KEY_NAME.male}
              </S.GenderButton>
              <S.GenderButton
                value={STUDENT_INFO_KEY_NAME.female}
                concept="outlined"
                size="sm"
                position="right"
                onClick={handleSelectGender}
              >
                {STUDENT_INFO_KEY_NAME.female}
              </S.GenderButton>
            </S.RowContainer>
          </S.GridButtonContainer>
          <AgGrid
            ref={gridRef}
            gridOptions={gridOptions}
            rowData={studentList}
            onRowDragEnd={handleUpdateRowsOnDragEnd}
            fullHeight
            minHeight={512}
          />
          <S.CreateButton onClick={handleCreate}>저장</S.CreateButton>
        </S.ColumnContainer>
      </S.RowContainer>
    </S.Layout>
  );
};

export default StudentRegister;
