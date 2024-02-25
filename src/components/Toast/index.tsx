import { ToastContainer, ToastPosition, toast } from 'react-toastify';

import * as S from './style';

import 'react-toastify/dist/ReactToastify.css';
// https://eundol1113.tistory.com/788

type NotifyProps = {
  message?: string;
  type?: string;
  autoClose?: number;
};

type ToastProps = {
  position?: ToastPosition;
  autoClose?: number;
};

export const notify = ({ message, type }: NotifyProps) => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    case 'warning':
      toast.warning(message);
      break;
  }
};

function Toast({ position, autoClose }: ToastProps) {
  return (
    <ToastContainer
      position={position}
      autoClose={autoClose}
      closeButton={false}
      hideProgressBar
      draggable
    />
  );
}

export default Toast;
