import { useState } from 'react';

import type { StudentBaseInfo } from '@Pages/StudentManagement/StudentRegister/type';

const useManualRegister = ({
  studentList,
  setStudentList,
}: {
  studentList: StudentBaseInfo[];
  setStudentList: React.Dispatch<React.SetStateAction<StudentBaseInfo[]>>;
}) => {
  const [studentsCount, setStudentsCount] = useState('');

  const handleChangeStudentsCount = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setStudentsCount(event.target.value);
  };

  const handleManuallyAddStudentList = () => {
    if (!studentsCount) {
      alert('학생 수를 선택해주세요.');
      return;
    }

    if (
      studentList.length &&
      !confirm('수정 중인 명렬표가 지워집니다. 계속하시겠습니까?')
    )
      return;

    const rows = Array.from({ length: Number(studentsCount) }).map(
      (_, index) => ({
        studentNumber: index + 1,
      }),
    );

    setStudentList(rows);
  };

  return {
    studentsCount,
    handleChangeStudentsCount,
    handleManuallyAddStudentList,
  };
};

export default useManualRegister;
