import { ReactNode } from 'react';

export type MenuProps = {
  trigger: ReactNode;
  position?: 'left' | 'right';
};

export type MenuItemProps = {
  onClickMenu: () => void;
};
