import { PropsWithChildren } from 'react';

type MenuItem = {
  onClickMenu: () => void;
};

function MenuItem({ children, onClickMenu }: PropsWithChildren<MenuItem>) {
  const handleClickItem = () => {
    onClickMenu();
  };

  return <li onClick={handleClickItem}>{children}</li>;
}

export default MenuItem;
