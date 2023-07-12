import * as S from './style';

interface CheckBoxProps {
  name: string;
}
function CheckBox({ name }: CheckBoxProps) {
  return (
    <S.Layout>
      <S.CheckBox type="checkbox" id={name} />
      <S.Label htmlFor={name}>{name}</S.Label>
    </S.Layout>
  );
}

export default CheckBox;
