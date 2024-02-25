import { ToastContainer, ToastPosition, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as S from './style';

type ToastProps = {
  position?: ToastPosition;
  name?: string;
  message?: string;
  autoclose?: number;
  onClick?: () => void;
};

function Toast({ position, name, message, autoclose, onClick }: ToastProps) {
  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
    toast(message);
  };

  return (
    <div>
      <S.ToastButton onClick={handleButtonClick}>{name}</S.ToastButton>
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
