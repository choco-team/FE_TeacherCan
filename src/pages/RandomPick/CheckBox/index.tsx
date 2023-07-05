import * as S from './style';
import { CheckboxLabel } from './type';

function CheckBox({ children }: CheckboxLabel) {
  return (
    <S.Layout>
      <S.CheckBox type="checkbox" id={children} />
      <S.Label htmlFor={children}>{children}</S.Label>
    </S.Layout>
  );
}

export default CheckBox;
