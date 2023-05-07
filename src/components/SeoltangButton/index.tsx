import * as S from './style';
import * as T from './type';

function SeoltangButton({
  type = 'button',
  text,
  backgroundColor,
}: T.SeoltangButton) {
  return (
    <S.SeoltangButton type={type} backgroundColor={backgroundColor}>
      {text}
    </S.SeoltangButton>
  );
}

export default SeoltangButton;
