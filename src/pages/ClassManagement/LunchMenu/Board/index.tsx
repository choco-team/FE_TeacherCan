import * as S from './style';
import AllergyReminder from '../AllergyReminder/AllergyReminder';
import Menus from '../Menus';

function Board() {
  return (
    <S.Layout>
      <Menus />
      <AllergyReminder />
    </S.Layout>
  );
}

export default Board;
