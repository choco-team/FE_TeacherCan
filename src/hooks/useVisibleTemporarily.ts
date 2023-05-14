import { useEffect, useState } from 'react';

const useVisibleTemporarily = (duration = 3) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, duration * 1000);

    return () => clearTimeout(timeout);
  }, []);

  return isVisible;
};

export default useVisibleTemporarily;
