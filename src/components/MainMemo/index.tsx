import * as S from './style';
import * as T from './type';
import MemoButton from '../MemoButton/index';
import { MemoDiv } from '../MemoDiv/style';
import AddTextArea from '../MemoTextArea/index';

function MemoTitle({ text, width, height }: T.MemoTitle) {
  const handleClick = () => {
    console.log('아직 모름');
  };
  const Border = '2px dashed #D1D5DB';

  return (
    <S.Div text={text} width={width} height={height}>
      <MemoDiv>
        {text}
        <MemoButton
          variant="primary"
          type="button"
          handleClick={handleClick}
          text="저장목록"
          width="90px"
          height="30px"
          activeColor="white"
          borderRadius="5px"
          border="1px solid #fca5a5"
          activeBorder="1px solid #d4d4d8"
          activeText="black"
          textAlign="center"
          fontSize="14px"
          fontWeight="bold"
        />
      </MemoDiv>
      <MemoDiv>
        <AddTextArea
          text="메모를 남겨주세요"
          width="250px"
          height="130px"
          handleClick={handleClick}
          border={Border}
          color="#71717a"
        />
      </MemoDiv>
      <MemoDiv>
        <MemoButton
          variant="primary"
          type="reset"
          handleClick={handleClick}
          text="취소"
          width="90px"
          height="30px"
          activeColor="white"
          borderRadius="5px"
          border="1px solid #fca5a5"
          activeBorder="1px solid #d4d4d8"
          activeText="black"
          textAlign="center"
          fontSize="14px"
          fontWeight="bold"
        />
        <MemoButton
          variant="primary"
          type="submit"
          handleClick={handleClick}
          text="저장"
          width="90px"
          height="30px"
          activeColor="white"
          borderRadius="5px"
          border="1px solid #fca5a5"
          activeBorder="1px solid #d4d4d8"
          activeText="black"
          textAlign="center"
          fontSize="14px"
          fontWeight="bold"
        />
      </MemoDiv>
    </S.Div>
  );
}

export default MemoTitle;
