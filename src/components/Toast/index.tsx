import { ToastContainer, toast } from 'react-toastify';

import * as S from './style';
import { Toast } from './type';

function Toast() {
  const closeAfter15 = () =>
    toast('Will close after 15s', { autoClose: 15000 });

  const closeAfter7 = () => toast('Will close after 7s', { autoClose: 7000 });

  return (
    <div>
      <S.ToastButton onClick={closeAfter15}>
        Close after 15 seconds
      </S.ToastButton>
      <S.ToastButton onClick={closeAfter7}>Close after 7 seconds</S.ToastButton>
      <ToastContainer autoClose={8000} />
    </div>
  );
}

export default Toast;
