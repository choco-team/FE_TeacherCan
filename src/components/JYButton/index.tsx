import * as S from './style';
import * as T from './type';

function JYButton({ text, backgroundColor, activeColor }: T.Button) {
  return (
    <S.Button backgroundColor={backgroundColor} activeColor={activeColor}>
      {text}
    </S.Button>
  );
}

export default JYButton;
