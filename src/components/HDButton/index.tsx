import * as S from './style';
import * as T from './type';

function HDButton({ text, color }: T.Button) {
  return <S.Button color={color}>{text}</S.Button>;
}

export default HDButton;
