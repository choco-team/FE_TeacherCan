import Button from '@Components/Button';
import Input from '@Components/Input';

import * as S from './style';

const QrCodeName = () => {
  return (
    <S.Container>
      <S.NameSpan>저장할 QR코드 이름</S.NameSpan>
      <Input></Input>
      <Button>저장</Button>
    </S.Container>
  );
};

export default QrCodeName;
