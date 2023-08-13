import {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled, { css } from 'styled-components';

import MenuItem from './MenuItem';

const MENU_LIST_POSITION = {
  left: css`
    left: 0;
    text-align: start;
  `,

  right: css`
    right: 0;
    text-align: end;
  `,
} as const;

type Menu = {
  trigger: ReactNode;
  position?: 'left' | 'right';
};

function Menu({
  children,
  trigger,
  position = 'left',
}: PropsWithChildren<Menu>) {
  const [isOpen, setIsOpen] = useState(false);

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
    <Layout position={position} ref={ref}>
      <Trigger onClick={handleClickTrigger}>{trigger}</Trigger>
      {isOpen && <MenuList position={position}>{children}</MenuList>}
    </Layout>
  );
}

Menu.Item = MenuItem;

export default Menu;

const Layout = styled.div<Required<Pick<Menu, 'position'>>>`
  position: relative;
  width: fit-content;

  margin: ${(props) => props.position === 'right' && '0 0 0 auto'};
`;

const Trigger = styled.div`
  margin-bottom: 10px;

  cursor: pointer;
`;

const MenuList = styled.ul<Required<Pick<Menu, 'position'>>>`
  position: absolute;

  display: grid;
  row-gap: 6px;

  width: max-content;

  padding: 10px 0px;
  border-radius: 5px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  background-color: ${(props) => props.theme.background.gray};

  li {
    padding: 8px 10px;

    transition: background-color 0.2s ease;

    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme.hoverBackground.gray};
    }
  }

  ${(props) => MENU_LIST_POSITION[props.position]}
`;
