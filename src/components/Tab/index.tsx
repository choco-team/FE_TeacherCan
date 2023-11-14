import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import * as S from './style';

const Tab = ({ children }: React.PropsWithChildren) => {
  const [hasScroll, setHasScroll] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollTab = (scrollTo: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;

    scrollRef.current.scrollBy({
      top: 0,
      left: ((scrollTo === 'left' ? -1 : 1) * clientWidth) / 2,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!scrollRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const element = entries[0];
      const {
        contentRect: { width },
        target: { scrollWidth },
      } = element;

      setHasScroll(width < scrollWidth);
    });

    observer.observe(scrollRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <S.TabContainer>
      {hasScroll && (
        <S.ScrollTabButton
          concept="text"
          onClick={() => handleScrollTab('left')}
        >
          <FaChevronLeft />
        </S.ScrollTabButton>
      )}
      <S.ScrollBox ref={scrollRef}>
        <S.ListContainer>{children}</S.ListContainer>
      </S.ScrollBox>
      {hasScroll && (
        <S.ScrollTabButton
          concept="text"
          onClick={() => handleScrollTab('right')}
        >
          <FaChevronRight />
        </S.ScrollTabButton>
      )}
    </S.TabContainer>
  );
};

Tab.Button = S.ListButton;

export default Tab;
