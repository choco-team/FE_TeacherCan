import { GridOptions } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { ChangeEvent, MouseEvent, useRef, useState } from 'react';
import * as XLSX from 'xlsx-js-style';

import Button from '@Components/Button';
import Input from '@Components/Input';

import { STUDENT_REGISTER_GUIDES } from './constant';
import * as S from './style';

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const StudentRegister = () => {
  const [createType, setCreateType] = useState<'xlsx' | 'manual'>('xlsx');
  const [studentNumber, setStudentNumber] = useState('');

  const gridRef = useRef<AgGridReact>(null);

  const gridOptions: GridOptions = {
    columnDefs: [
      {
        headerName: '번호',
        field: '번호',
        width: 70,
        cellEditor: 'agNumberCellEditor',
        cellEditorParams: {
          min: 1,
          max: 100,
          precision: 0,
        },
      },
      { headerName: '이름', field: '이름', minWidth: 180, flex: 2 },
      {
        headerName: '성별',
        field: '성별',
        flex: 1,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['남', '여'],
        },
        headerCheckboxSelection: true,
        checkboxSelection: true,
      },
    ],

    defaultColDef: {
      resizable: true,
      minWidth: 70,
      cellStyle: { textAlign: 'center' },
      editable: true,
    },
    editType: 'fullRow',
    suppressDragLeaveHidesColumns: true,
    rowSelection: 'multiple',
    suppressRowClickSelection: true,

    rowData: [],
  };

  const setRowData = (rows: object[]) => {
    gridRef.current?.api.setRowData(rows);
  };

  const addStudents = () => {
    if (!studentNumber) {
      alert('학생 수를 선택해주세요.');
      return;
    }

    const rows = Array.from({ length: Number(studentNumber) }).map(
      (_, index) => ({
        번호: index + 1,
      }),
    );

    setRowData(rows);
  };

  const readExcel = async (file: File) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = (event: ProgressEvent<FileReader>) => {
      if (!event.target) return;
      const bufferArray = event.target.result;
      const fileInformation = XLSX.read(bufferArray, {
        type: 'buffer',
        cellText: false,
      });
      const sheetName = fileInformation.SheetNames[0];
      const rawData = fileInformation.Sheets[sheetName];
      const rowsData: object[] = XLSX.utils.sheet_to_json(rawData);

      setRowData(rowsData);
    };
  };

  const handleChangeStudentNumber = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setStudentNumber(value);
  };

  const handleExcelFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files) return;
    readExcel(files[0]);
  };

  const handleDownloadExcelSample = () => {
    alert('개발 중입니다.');
  };

  const handleChangeCreateType = (event: MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    if (value === 'xlsx' || value === 'manual') setCreateType(value);
  };

  const handleSelectGender = (event: MouseEvent<HTMLButtonElement>) => {
    if (!gridRef.current) return;
    const { value } = event.currentTarget;
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    selectedNodes.forEach((node) => {
      node.setDataValue('성별', value);
      node.setSelected(false);
    });
  };

  return (
    <S.Layout>
      <S.CoulmnContainer gap="24px" flex="1 1 0">
        <S.Title>명렬표 등록</S.Title>
        <S.List>
          {STUDENT_REGISTER_GUIDES.map((guide, index) => (
            <S.ListItem key={index + guide}>{guide}</S.ListItem>
          ))}
        </S.List>

        <S.CoulmnContainer gap="8px">
          <S.Label>명렬표 이름</S.Label>
          <Input width="100%" maxWidth="100%" />
        </S.CoulmnContainer>

        <S.CoulmnContainer gap="8px">
          <S.RowContainer gap="8px">
            {[
              { tabValue: 'xlsx', content: '엑셀 파일 업로드' },
              { tabValue: 'manual', content: '직접 입력' },
            ].map(({ tabValue, content }) => (
              <S.TabButton
                key={tabValue}
                value={tabValue}
                isOnFocus={createType === tabValue}
                concept="outlined"
                width="50%"
                size="lg"
                onClick={handleChangeCreateType}
              >
                {content}
              </S.TabButton>
            ))}
          </S.RowContainer>

          {createType === 'xlsx' && (
            <S.TabContainer>
              <S.RowContainer
                alignItems="baseline"
                justifyContent="space-between"
                gap="16px"
              >
                <S.Label>엑셀 파일(나이스 명단) 업로드</S.Label>
                <Button size="sm" onClick={handleDownloadExcelSample}>
                  엑셀 양식 다운로드
                </Button>
              </S.RowContainer>
              <S.FileInput
                type="file"
                width="100%"
                maxWidth="100%"
                dense
                onChange={handleExcelFileChange}
              />
            </S.TabContainer>
          )}

          {createType === 'manual' && (
            <S.TabContainer>
              <S.RowContainer gap="8px">
                <S.Label>학생 수</S.Label>
                <S.Select onChange={handleChangeStudentNumber}>
                  <option value="">선택</option>
                  {Array.from({ length: 100 }).map((_, index) => (
                    <option key={index}>{index + 1}</option>
                  ))}
                </S.Select>
                <Button onClick={addStudents}>명렬표 생성</Button>
              </S.RowContainer>
            </S.TabContainer>
          )}

          <Button size="wide" margin="auto">
            저장
          </Button>
        </S.CoulmnContainer>
      </S.CoulmnContainer>
      <S.CoulmnContainer gap="8px" flex="1.5 1 0">
        <S.TableHeaderContainer>
          <h2>기초사항 등록</h2>
          <S.RowContainer maxWidth="fit-content">
            <S.GenderButton
              value="남"
              concept="outlined"
              position="left"
              onClick={handleSelectGender}
            >
              남
            </S.GenderButton>
            <S.GenderButton
              value="여"
              concept="outlined"
              position="right"
              onClick={handleSelectGender}
            >
              여
            </S.GenderButton>
          </S.RowContainer>
        </S.TableHeaderContainer>
        <S.AgGridWrapper className="ag-theme-alpine">
          <AgGridReact ref={gridRef} gridOptions={gridOptions} />
        </S.AgGridWrapper>
      </S.CoulmnContainer>
    </S.Layout>
  );
};

export default StudentRegister;
