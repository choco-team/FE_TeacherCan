import * as S from './style';
import * as T from './type';

function JYButton({
  vacationtext,
  datetext,
  backgroundColor,
  activeColor,
  handleClick,
  color,
}: T.Button) {
  const onClick = () => {
    handleClick();
  };

  return (
    <S.Button
      type="button"
      backgroundColor={backgroundColor}
      activeColor={activeColor}
      color={color}
      onClick={onClick}
    >
      {vacationtext}
      <S.DayToVacation>{datetext}</S.DayToVacation>
    </S.Button>
  );
}

export default JYButton;
