import * as S from './style';
import * as T from './type';

function JYButton({ text, backgroundColor }: T.Button) {
  return <S.Button backgroundColor={backgroundColor}>{text}</S.Button>;
}

export default JYButton;
