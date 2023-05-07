import * as S from './style';
import * as T from './type';

function SeoltangButton({
  type = 'button',
  text,
  handleClick,
  backgroundColor,
}: T.SeoltangButton) {
  const onClick = () => handleClick();

  return (
    <S.SeoltangButton
      type={type}
      onClick={onClick}
      backgroundColor={backgroundColor}
    >
      {text}
    </S.SeoltangButton>
  );
}

export default SeoltangButton;
