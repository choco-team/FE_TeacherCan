import { useEffect, useState } from 'react';

const useTimer = () => {
  const [initTime, setInitTime] = useState(320);
  const [time, setTime] = useState(320);
  const [state, setState] = useState<'stop' | 'play'>('stop');

  const progress = ((initTime - time) / initTime) * 100;

  const toggleState = () => {
    if (state === 'play') setState('stop');
    else setState('play');
  };

  useEffect(() => {
    if (time === 0 || state === 'stop') return;

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, state]);

  return { time, state, progress, toggleState };
};

export default useTimer;
