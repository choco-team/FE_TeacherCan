import { useEffect } from 'react';

const usePreventBodyScroll = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, []);
};

export default usePreventBodyScroll;
