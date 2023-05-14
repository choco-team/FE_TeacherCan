import useVisibleTemporarily from '@Hooks/useVisibleTemporarily';

import * as S from './style';
import * as T from './type';

function Alert({
  type = 'success',
  text,
  duration = 3,
  isReverse = false,
}: T.Alert) {
  const isVisible = useVisibleTemporarily(duration);

  return isVisible ? (
    <S.Alert type={type} isReverse={isReverse}>
      <S.Text>{text}</S.Text>
      <S.DurationBar type={type} isReverse={isReverse} duration={duration} />
    </S.Alert>
  ) : null;
}

export default Alert;
