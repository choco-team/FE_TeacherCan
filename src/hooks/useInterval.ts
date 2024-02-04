import { useEffect, useRef } from 'react';

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!savedCallback || !delay) return;

    const tick = () => savedCallback.current!();
    const id = setInterval(tick, delay);

    return () => clearInterval(id);
  }, [delay]);
};

export default useInterval;
