import useModal from '@Hooks/useModal';

import Button from '@Components/Button';

import * as S from './style';

type RandomPickModalProps = {
  studentsList: {
    number: number;
    name: string;
  }[];
  setStudentsList: React.Dispatch<
    React.SetStateAction<
      {
        number: number;
        name: string;
      }[]
    >
  >;
  setExcludedStudents: React.Dispatch<React.SetStateAction<string[]>>;
  studentsNumber: number;
  setStudentsNumber: React.Dispatch<React.SetStateAction<number>>;
  duplication: boolean;
  setDuplication: React.Dispatch<React.SetStateAction<boolean>>;
};

const STUDENTS_LISTS: { [key: string]: { number: number; name: string }[] } = {
  MOCK_STUDENTS: [
    { number: 1, name: '김학생' },
    { number: 2, name: '이학생' },
    { number: 3, name: '박학생' },
    { number: 4, name: '우학생' },
    { number: 5, name: '최학생' },
    { number: 6, name: '조학생' },
    { number: 7, name: '장학생' },
    { number: 8, name: '나학생' },
    { number: 9, name: '다학생' },
    { number: 10, name: '가학생' },
  ],

  SECOND_STUDENTS: [
    { number: 1, name: '김나라' },
    { number: 2, name: '이나라' },
    { number: 3, name: '박나라' },
    { number: 4, name: '우나라' },
    { number: 5, name: '최나라' },
    { number: 6, name: '조나라' },
    { number: 7, name: '장나라' },
    { number: 8, name: '나나라' },
    { number: 9, name: '다나라' },
    { number: 10, name: '가나라' },
  ],
};

function RandomPickModal({
  studentsList,
  setStudentsList,
  studentsNumber,
  setExcludedStudents,
  setStudentsNumber,
  duplication,
  setDuplication,
}: RandomPickModalProps) {
  const { closeModal } = useModal();

  const handleListName = (listName: string) => {
    // setStudentsList(STUDENTS_LISTS[listName]);
    localStorage.setItem(
      'studentsList',
      JSON.stringify(STUDENTS_LISTS[listName]),
    );
  };

  const handlePersonNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    // setStudentsNumber(parseInt(newValue));
    localStorage.setItem('newValue', newValue.toString());
  };

  const handleDuplicationYes = () => {
    // setDuplication(true);
    localStorage.setItem('duplication', true.toString());
  };

  const handleDuplicationNo = () => {
    // setDuplication(false);
    localStorage.setItem('duplication', false.toString());
  };

  const saveConditions = () => {
    //   localStorage.setItem('studentsList', JSON.stringify(studentsList));
    //   localStorage.setItem('newValue', studentsNumber.toString());
    //   localStorage.setItem('duplication', duplication.toString());
    setExcludedStudents([]);
    setStudentsNumber(parseInt(localStorage.getItem('newValue') || '0'));
  };

  return (
    <>
      <S.ModalContainer>
        명렬표
        {Object.keys(STUDENTS_LISTS).map((listName, index) => (
          <S.SmallButton key={index} onClick={() => handleListName(listName)}>
            {listName}
          </S.SmallButton>
        ))}
      </S.ModalContainer>
      <S.ModalContainer>
        <label htmlFor="theInputNumber">인원</label>
        <S.PersonInput
          id="theInputNumber"
          min={0}
          step={1}
          onChange={handlePersonNumber}
        ></S.PersonInput>
      </S.ModalContainer>
      <S.ModalContainer>
        중복 허용
        <S.SmallButton onClick={handleDuplicationYes}>YES</S.SmallButton>
        <S.SmallButton onClick={handleDuplicationNo}>NO</S.SmallButton>
      </S.ModalContainer>
      <S.SmallButtonWrapper>
        <Button
          onClick={() => {
            saveConditions();
            closeModal();
          }}
        >
          저장
        </Button>
      </S.SmallButtonWrapper>
    </>
  );
}

export default RandomPickModal;
