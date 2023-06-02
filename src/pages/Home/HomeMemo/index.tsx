import {
  SaveListButton,
  SaveButton,
  DeleteButton,
} from '@Components/Button/Button.stories';
import { MemoDiv } from '@Components/MemoDiv/style';
import { MemoTextAreaDefault } from '@Components/MemoTextArea/MemoTextArea.stories';

import Button from '@Components/Button';
import MemoTextArea from '@Components/MemoTextArea';

import * as S from './style';
import * as T from './type';

function HomeMemo({ text, width, height }: T.HomeMemo) {
  const handleClick = () => {
    console.log('아직 모름');
  };

  return (
    <S.Div text={text} width={width} height={height}>
      <MemoDiv>
        <span>{text}</span>
        <Button {...SaveListButton.args} handleClick={handleClick} />
      </MemoDiv>
      <MemoDiv>
        <MemoTextArea {...MemoTextAreaDefault.args} />
      </MemoDiv>
      <MemoDiv>
        <Button {...DeleteButton.args} />
        <Button {...SaveButton.args} />
      </MemoDiv>
    </S.Div>
  );
}

export default HomeMemo;
