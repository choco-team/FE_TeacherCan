import { useCallback, useLayoutEffect } from 'react';
import useMediaStore from 'src/stores/useMediaStore';

import { MEDIA_SIZE } from '@Constant/media';

const useMedia = () => {
  const media = useMediaStore((state) => state.media);
  const setMedia = useMediaStore((state) => state.setMedia);

  const observerBodySize: ResizeObserverCallback = useCallback(
    ([body]) => {
      const {
        contentRect: { width },
      } = body;

      if (width > MEDIA_SIZE.tablet) setMedia('desktop');
      else if (width > MEDIA_SIZE.mobile) setMedia('tablet');
      else setMedia('mobile');
    },
    [setMedia],
  );

  useLayoutEffect(() => {
    const observer = new ResizeObserver(observerBodySize);

    const body = document.querySelector('body');

    if (!body) return;

    observer.observe(body);

    return () => observer.unobserve(body);
  }, [observerBodySize]);

  return media;
};

export default useMedia;
