import { ToastContainer, ToastPosition, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Button from '@Components/Button';

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
      <Button onClick={handleButtonClick}>{name}</Button>
      <ToastContainer
        position={position}
        // limit={1}
        closeButton={false}
        autoClose={autoclose}
        hideProgressBar
      />
    </div>
  );
}

export default Toast;
