import * as S from './style';
import Menus from '../Menus';

function Board() {
  return (
    <>
      <S.Layout>
        <Menus />
        {/* <AllergyReminder /> */}
      </S.Layout>
      <div>
        하루가 아니라 일주일 식단을 보여주면 화면구성이 알찰것 같다. 알러지를
        보여주는 방식을 모달로 해주면 어떨까요?
      </div>
    </>
  );
}

export default Board;
