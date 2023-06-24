import * as S from './style';
import * as T from './type';

function LinkText({ text, linkTo }: T.LinkText) {
  return <S.LinkText to={linkTo}>{text}</S.LinkText>;
}

export default LinkText;
