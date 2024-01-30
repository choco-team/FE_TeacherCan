import { ToastContainer, ToastPosition, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as S from './style';

type ToastProps = {
  position?: ToastPosition;
  message?: string;
  autoclose?: number;
};

function Toast({ position, message, autoclose }: ToastProps) {
  const notify = () => toast(message);

  return (
    <div>
      <S.ToastButton onClick={notify}>Notify !</S.ToastButton>
      <ToastContainer
        position={position}
        limit={1}
        closeButton={false}
        autoClose={autoclose}
        hideProgressBar
      />
    </div>
  );
}

export default Toast;
