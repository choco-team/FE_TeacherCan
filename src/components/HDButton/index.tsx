import * as S from './style';
import * as T from './type';

function HDButton({ text, backgroundColor }: T.Button) {
  return <S.Button backgroundColor={backgroundColor}>{text}</S.Button>;
}

export default HDButton;
