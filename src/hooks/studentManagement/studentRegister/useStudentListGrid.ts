import type { AgGridReact } from 'ag-grid-react';

import type { StudentBaseInfo } from '@Pages/StudentManagement/StudentRegister/type';

const useStudentListGrid = ({
  gridRef,
  setStudentList,
}: {
  gridRef: React.RefObject<AgGridReact>;
  setStudentList: React.Dispatch<React.SetStateAction<StudentBaseInfo[]>>;
}) => {
  const handleAddRow = () => {
    setStudentList((prev) => [
      ...prev,
      {
        studentNumber: prev.length
          ? Math.max(...prev.map(({ studentNumber }) => studentNumber)) + 1
          : 1,
      },
    ]);
  };

  const handleRemoveSelectedRow = () => {
    if (!gridRef.current) return;
    const selectedRowNodes = gridRef.current.api.getSelectedNodes();
    const selectedIds = selectedRowNodes.map(({ id }) => Number(id));

    setStudentList((prev) => [
      ...prev.filter((_, index) => !selectedIds.includes(index)),
    ]);
  };

  const handleUpdateRowsOnDragEnd = () => {
    if (!gridRef.current) return;
    const updatedStudentList: StudentBaseInfo[] = [];
    gridRef.current.api.forEachNode(({ data }) => {
      updatedStudentList.push(data);
    });

    setStudentList(updatedStudentList);
  };

  const handleSortByStudentNumberAsc = () => {
    setStudentList((prev) => [
      ...prev.sort((a, b) => a.studentNumber - b.studentNumber),
    ]);
  };

  const handleSelectGender = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!gridRef.current) return;
    const { value } = event.currentTarget;
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    selectedNodes.forEach((node) => {
      node.setDataValue('gender', value);
      node.setSelected(false);
    });
  };

  return {
    handleAddRow,
    handleRemoveSelectedRow,
    handleUpdateRowsOnDragEnd,
    handleSortByStudentNumberAsc,
    handleSelectGender,
  };
};

export default useStudentListGrid;
