import {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

type Menu = {
  trigger: ReactNode;
  positions: 'left' | 'right';
};

function Menu({
  children,
  trigger,
  positions = 'left',
}: PropsWithChildren<Menu>) {
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
    <Layout ref={ref}>
      <Trigger onClick={handleClickTrigger}>{trigger}</Trigger>
      {isOpen && <MenuList>{children}</MenuList>}
    </Layout>
  );
}

Menu.Item = MenuItem;

export default Menu;

const Layout = styled.div`
  width: fit-content;
`;

const Trigger = styled.div`
  margin-bottom: 10px;

  cursor: pointer;
`;

const MenuList = styled.ul`
  display: grid;
  row-gap: 6px;

  width: fit-content;

  padding: 10px 0px;
  border-radius: 5px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  background-color: ${(props) => props.theme.background.gray};

  li {
    padding: 3px 10px;

    transition: background-color 0.2s ease;

    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme.hoverBackground.gray};
    }
  }
`;
