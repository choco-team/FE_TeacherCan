import MemoButton from './MemoButton/index';
import { MemoDiv } from './MemoDiv/style';
import AddTextArea from './MemoTextArea';
import * as S from './style';
import * as T from './type';

function MemoTitle({ text }: T.MemoTitle) {
  const handleClick = () => {
    console.log('아직 모름');
  };
  const Border = '2px dashed #D1D5DB';

  return (
    <S.Div text={text}>
      <MemoDiv>
        {text}
        <MemoButton
          variant="white"
          text="저장목록"
          activeColor="#FCA5A5"
          activeText="white"
          type="button"
          handleClick={handleClick}
        />
      </MemoDiv>
      <MemoDiv>
        <AddTextArea
          text="메모를 남겨주세요"
          width="350px"
          height="130px"
          handleClick={handleClick}
          border={Border}
        />
      </MemoDiv>
      <MemoButton
        variant="white"
        text="취소"
        activeColor="#FCA5A5"
        activeText="white"
        type="reset"
        handleClick={handleClick}
      />
      <MemoButton
        variant="white"
        text="저장"
        activeColor="#FCA5A5"
        activeText="white"
        type="submit"
        handleClick={handleClick}
      />
    </S.Div>
  );
}

export default MemoTitle;
