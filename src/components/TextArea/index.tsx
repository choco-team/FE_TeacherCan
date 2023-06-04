import * as S from './style';
import * as T from './type';

function TextArea({ placeholder, border = 'solid', rows = 5 }: T.TextArea) {
  return <S.TextArea border={border} placeholder={placeholder} rows={rows} />;
}

export default TextArea;
