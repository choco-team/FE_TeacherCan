import { useCallback, useEffect, useState } from 'react';

const worker = new Worker('../../../src/workers/timerWorker.ts');

const useTimer = () => {
  const [initTime, setInitTime] = useState(20);
  const [time, setTime] = useState(initTime);
  const [state, setState] = useState<'pause' | 'play'>('pause');

  const progress = ((initTime - time) / initTime) * 100;

  const toggleState = () => {
    if (state === 'play') setState('pause');
    else setState('play');
  };

  const playTimer = useCallback(() => {
    () => {
      worker.postMessage(time);
      worker.onmessage = (event: MessageEvent<number>) => {
        const leftTime = event.data;

        setTime(leftTime);

        if (leftTime === 0) setState('pause');
      };
    };
  }, [time]);

  useEffect(() => {
    if (state === 'play') playTimer();

    return () => {
      worker.terminate();
    };
  }, [playTimer, state]);

  return { time, state, progress, toggleState };
};

export default useTimer;
