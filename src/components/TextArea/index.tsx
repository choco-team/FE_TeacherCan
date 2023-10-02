import * as S from './style';
import * as T from './type';

function TextArea({
  size = 'md',
  dense = size === 'sm',
  rows = 5,
  ...props
}: T.TextArea) {
  return <S.TextArea $size={size} dense={dense} rows={rows} {...props} />;
}

export default TextArea;
