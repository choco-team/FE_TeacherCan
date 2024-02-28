// import { ToastContainer, ToastPosition, toast } from 'react-toastify';

// import * as S from './style';

// import 'react-toastify/dist/ReactToastify.css';

// type NotifyProps = {
//   message?: string;
//   type?: string;
// };

// type ToastProps = {
//   position?: ToastPosition;
//   autoClose?: number;
// };

// export const notify = ({ message, type }: NotifyProps) => {
//   switch (type) {
//     case 'success':
//       toast.success(message);
//       break;
//     case 'error':
//       toast.error(message);
//       break;
//     case 'warning':
//       toast.warning(message);
//       break;
//   }
// };

// function Toast({ position, autoClose }: ToastProps) {
//   return (
//     <ToastContainer
//       position={position}
//       autoClose={autoClose}
//       closeButton={false}
//       hideProgressBar
//       draggable
//     />
//   );
// }

// export default Toast;

import React, { createContext, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ToastContextType = {
  showToast: (message: string, type: 'success' | 'error' | 'warning') => void;
};

const ToastContext = createContext<ToastContextType>({ showToast: () => {} });

export const useToast = () => {
  const context = useContext(ToastContext);
  return context.showToast;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const showToast = (
    message: string,
    type: 'success' | 'error' | 'warning',
  ) => {
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

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={2000} />
      <ToastContext.Provider value={{ showToast }}>
        {children}
      </ToastContext.Provider>
    </>
  );
};
