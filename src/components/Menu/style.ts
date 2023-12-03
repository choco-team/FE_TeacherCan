import styled from 'styled-components';

import theme from '@Styles/theme';

import { MenuProps } from './type';

import { MENU_LIST_POSITION } from '.';

export const Layout = styled.div<Required<Pick<MenuProps, 'position'>>>`
  position: relative;
  width: fit-content;

  margin: ${(props) => props.position === 'right' && '0 0 0 auto'};
`;

export const Trigger = styled.div`
  cursor: pointer;
`;

export const MenuList = styled.ul<Required<Pick<MenuProps, 'position'>>>`
  position: absolute;
  top: 40px;

  display: grid;
  row-gap: 6px;

  width: max-content;

  padding: 10px 0px;
  border-radius: 5px;

  box-shadow: ${(props) => props.theme.shadow[200]};

  background-color: ${(props) => props.theme.mainBackground};

  li {
    padding: 8px 20px;

    transition: background-color 0.2s ease;
    color: ${(props) => props.theme.accentText};
    font-size: 1.5rem;

    cursor: pointer;

    &:hover {
      background-color: ${theme.color.gray[200]};
    }
  }

  ${(props) => MENU_LIST_POSITION[props.position]}
`;
