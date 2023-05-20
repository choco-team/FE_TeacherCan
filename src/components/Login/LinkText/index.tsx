import * as S from './style';
import * as T from './type';

function LinkText({ text }: T.LinkText) {
  return <S.LinkText to="/">{text}</S.LinkText>;
}

export default LinkText;
