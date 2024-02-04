import { useEffect, useState } from 'react';

import useInterval from '@Hooks/useInterval';

const useTimer = () => {
  const [initTime, setInitTime] = useState(320);
  const [time, setTime] = useState(320);
  const [state, setState] = useState<'stop' | 'play'>('stop');

  const progress = ((initTime - time) / initTime) * 100;

  const toggleState = () => {
    if (state === 'play') setState('stop');
    else setState('play');
  };

  useInterval(
    () => {
      setTime((prev) => prev - 1);
    },
    time === 0 || state === 'stop' ? null : 1000,
  );

  return { time, state, progress, toggleState };
};

export default useTimer;
