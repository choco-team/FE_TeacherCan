import * as S from './style';
import * as T from './type';

function HDButton({
  text,
  variant,
  hasBorder = false,
  disabled = false,
}: T.Button) {
  return (
    <S.Button variant={variant} hasBorder={hasBorder} disabled={disabled}>
      {text}
    </S.Button>
  );
}

export default HDButton;
