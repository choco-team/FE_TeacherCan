import { IconType } from 'react-icons';

type NavigationLink = {
  category: 'main' | 'middle';
  isSelected: boolean;
  name: string;
  path: string;
  Icon?: IconType;
};

type LayoutProps = Pick<NavigationLink, 'category' | 'isSelected'>;

export type { NavigationLink, LayoutProps };
