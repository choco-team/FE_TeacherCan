import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { css } from 'styled-components';

import MenuItem from './MenuItem';
import * as S from './style';
import type { MenuProps } from './type';

export const MENU_LIST_POSITION = {
  left: css`
    left: 0;
    text-align: start;
  `,

  right: css`
    right: 0;
    text-align: end;
  `,
} as const;

function Menu({
  children,
  trigger,
  position = 'left',
}: PropsWithChildren<MenuProps>) {
  const [isOpen, setIsOpen] = useState(true);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickTrigger = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  return (
    <S.Layout position={position} ref={ref}>
      <S.Trigger onClick={handleClickTrigger}>{trigger}</S.Trigger>
      {isOpen && <S.MenuList position={position}>{children}</S.MenuList>}
    </S.Layout>
  );
}

Menu.Item = MenuItem;

export default Menu;
