import { read, utils, writeFile } from 'xlsx';

import { STUDENT_INFO_KEY_NAME } from '@Pages/StudentManagement/StudentRegister/constant';
import type { StudentBaseInfo } from '@Pages/StudentManagement/StudentRegister/type';

const useExcelRegister = ({
  setStudentList,
}: {
  setStudentList: React.Dispatch<React.SetStateAction<StudentBaseInfo[]>>;
}) => {
  const readExcel = async (file: File) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = (event: ProgressEvent<FileReader>) => {
      if (!event.target) return;
      const bufferArray = event.target.result;
      const fileInformation = read(bufferArray, {
        type: 'buffer',
        cellText: false,
      });
      const sheetName = fileInformation.SheetNames[0];
      const rawData = fileInformation.Sheets[sheetName];
      const rows: Record<string, string>[] = utils.sheet_to_json(rawData);

      const formattedRows = rows.map((row) => {
        const { studentNumber, studentName, gender } = STUDENT_INFO_KEY_NAME;

        return {
          studentNumber: Number(row[studentNumber]),
          studentName: row[studentName],
          gender:
            row[gender] === STUDENT_INFO_KEY_NAME.male ||
            row[gender] === STUDENT_INFO_KEY_NAME.female
              ? row[gender]
              : undefined,
        };
      });

      setStudentList(formattedRows);
    };
  };

  const handleChangeExcelFile = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { files } = event.target;

    if (!files) return;
    readExcel(files[0]);
  };

  const handleDownloadExcelSample = () => {
    const rows = [
      {
        번호: 1,
        이름: '홍길동',
        성별: STUDENT_INFO_KEY_NAME.male,
      },
      {
        번호: 2,
        이름: '김학생',
        성별: STUDENT_INFO_KEY_NAME.female,
      },
    ];
    const worksheet = utils.json_to_sheet(rows);
    const workbook = utils.book_new();

    utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    writeFile(workbook, '명렬표 양식.xlsx');
  };

  return {
    handleChangeExcelFile,
    handleDownloadExcelSample,
  };
};

export default useExcelRegister;
