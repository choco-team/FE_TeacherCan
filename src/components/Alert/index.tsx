import { useEffect, useState } from 'react';

import * as S from './style';
import * as T from './type';

function Alert({
  type = 'success',
  text,
  duration = 3,
  isReverse = false,
}: T.Alert) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, duration * 1000);

    return () => clearTimeout(timeout);
  }, []);

  return isVisible ? (
    <S.Alert type={type} isReverse={isReverse}>
      <S.Text>{text}</S.Text>
      <S.DurationBar type={type} isReverse={isReverse} duration={duration} />
    </S.Alert>
  ) : null;
}

export default Alert;
