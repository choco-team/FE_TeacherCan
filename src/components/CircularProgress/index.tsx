import * as S from './style';
import { Props } from './type';

function CircularProgress({ size = 'medium', $style }: Props) {
  return (
    <S.StyledCircularProgress size={size} $style={$style}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </S.StyledCircularProgress>
  );
}

export default CircularProgress;
