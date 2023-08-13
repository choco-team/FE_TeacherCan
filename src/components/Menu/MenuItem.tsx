import { PropsWithChildren } from 'react';

import type { MenuItemProps } from './type';

function MenuItem({ children, onClickMenu }: PropsWithChildren<MenuItemProps>) {
  const handleClickItem = () => {
    onClickMenu();
  };

  return <li onClick={handleClickItem}>{children}</li>;
}

export default MenuItem;
