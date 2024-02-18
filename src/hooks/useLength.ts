import { useLayoutEffect, useRef, useState } from 'react';

type UseLength = {
  standard: 'width' | 'height';
  resized?: boolean;
};

const useLength = <T extends HTMLElement>({
  standard,
  resized = true,
}: UseLength): [React.RefObject<T>, number] => {
  const ref = useRef<T>(null);
  const [length, setLength] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return;

    if (resized) {
      const resizeObserver = new ResizeObserver(([element]) => {
        setLength(element.contentRect[standard]);
      });

      resizeObserver.observe(ref.current);
    }

    if (!resized) {
      const lengthStandard =
        standard === 'width' ? 'clientWidth' : 'clientHeight';

      setLength(ref.current[lengthStandard]);
    }
  }, [resized, standard]);

  return [ref, length];
};

export default useLength;
