import Button from '@Components/Button';
import Input from '@Components/Input';

import * as S from './style';

interface QrcodeNameProps {
  closeModal: () => void;
}
const QrcodeName: React.FC<QrcodeNameProps> = ({ closeModal }) => {
  return (
    <S.Container>
      <S.NameSpan>저장할 QR코드 이름</S.NameSpan>
      <Input></Input>
      <Button onClick={closeModal}>저장</Button>
    </S.Container>
  );
};

export default QrcodeName;
