import styled from 'styled-components';

import { Menu } from './type';

import { MENU_LIST_POSITION } from '.';

export const Layout = styled.div<Required<Pick<Menu, 'position'>>>`
  position: relative;
  width: fit-content;

  margin: ${(props) => props.position === 'right' && '0 0 0 auto'};
`;

export const Trigger = styled.div`
  margin-bottom: 10px;

  cursor: pointer;
`;

export const MenuList = styled.ul<Required<Pick<Menu, 'position'>>>`
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
