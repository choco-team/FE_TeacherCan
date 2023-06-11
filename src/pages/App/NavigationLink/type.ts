import { IconType } from 'react-icons';

type NavigationLink = {
  category: 'main' | 'middle';
  isSelected: boolean;
  name: string;
  path: string;
  Icon?: IconType;
};

export type { NavigationLink };
