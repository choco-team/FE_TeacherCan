import * as S from './style';

const STUDENT_MOCK_DATA = [
  {
    name: '김학생',
    allergy: [1, 5, 13],
  },
  {
    name: '이학생',
    allergy: [17],
  },
];

function AllergyReminder() {
  return (
    <S.Layout>
      <S.Title>알러지 알리미</S.Title>
      <S.Students>
        {STUDENT_MOCK_DATA.map(({ name, allergy }) => {
          return (
            <S.StudentWrapper key={name}>
              <div>{name}</div>
              <S.Allergies>{allergy.join(' ')}</S.Allergies>
            </S.StudentWrapper>
          );
        })}
        <div>알러지를 보여주는 방식을 모달로 해주면 어떨까요?</div>
      </S.Students>
    </S.Layout>
  );
}

export default AllergyReminder;
